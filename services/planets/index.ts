import { filterFulfilled, getId } from "@/utils/helper";
import { getFilmsByUrls} from "@/services/films";
import { getPeopleByUrls } from "@/services/people";
import { getPlanetPicture } from "@/utils/constants";
import { fetchData } from "@/utils/api";

import type { IPlanet, IPlanetDetail, IPlanetResponse, IPlanetWithId } from "@/types/planet";

export const getPlanets = async ({ page = 1, query }: { page: number, query?: string }) => {
  try {
    let url = `planets/?page=${page}`;
    
    if(query) {
      url = `planets/?search=${query}&page=${page}`;
    }
    
    const data = await fetchData<IPlanetResponse>(url);
    
    const results = data.results?.map((planet: IPlanet) => ({
      ...planet,
      id: getId(planet.url)
    })) as IPlanetWithId[]
    
    return { ...data,  results };
  } catch (err) {
    console.error(err);
    return {
      count: 0,
      next: "",
      previous: "",
      results: []
    };
  }
}

export const getPlanet = async (id: string): Promise<IPlanetDetail> => {
  const data = await fetchData<IPlanet>(`planets/${id}`);
  
  const [films, residents] = await Promise.all([
    getFilmsByUrls(data.films),
    getPeopleByUrls(data.residents)
  ]);
  
  return {
    ...data,
    imageUrl: getPlanetPicture(id),
    films,
    residents
  } as IPlanetDetail
}

export const getPlanetsByUrls = async (urls: string[] | IPlanet[]) => {
  const planets = await Promise.allSettled(urls.map(async (url: string | IPlanet) => {
    if (typeof url === 'object') return;
    const id = getId(url);
    const response = await fetchData<IPlanet>(url);
    return { id, name: response.name, imageUrl: getPlanetPicture(id) };
  }));
  
  return filterFulfilled(planets);
}