import { filterFulfilled, getId } from "@/utils/helper";
import { getFilmsByUrls } from "@/services/films";
import { getStarshipsByUrls } from "@/services/starships";
import { getSpeciesByUrls } from "@/services/species";
import { getVehiclesByUrls } from "@/services/vehicles";
import { getPeoplePicture } from "@/utils/picture-urls";
import { fetchData } from "@/utils/api";
import { getPlanetsByUrls } from "@/services/planets";

import type { IPerson, IPersonDetail, IPersonResponse, IPersonCustom } from "@/types/people";

export const getPeople = async ({ page = 1, query }: { page: number, query?: string }) => {
  try {
    let url = `people/?page=${page}`;
    
    if(query) {
      url = `people/?search=${query}&page=${page}`;
    }
    
    const data = await fetchData<IPersonResponse>(url);
    
    const results = data.results.map((person: IPerson) => ({
      ...person,
      id: getId(person.url),
      imageUrl: getPeoplePicture(getId(person.url))
    })) as IPersonCustom[];
    
    return { ...data, results };
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

export const getPerson = async (id: string): Promise<IPersonDetail> => {
  const data = await fetchData<IPerson>(`people/${id}`);
  
  const [films, species, starships, vehicles, homeworld] = await Promise.all([
    getFilmsByUrls(data.films),
    getSpeciesByUrls(data.species),
    getStarshipsByUrls(data.starships),
    getVehiclesByUrls(data.vehicles),
    getPlanetsByUrls([data.homeworld])
  ]);
  
  return {
    ...data,
    imageUrl: getPeoplePicture(id),
    homeworld: homeworld[0],
    films,
    species,
    starships,
    vehicles
  } as IPersonDetail;
}

export const getPeopleByUrls = async (urls: (string | IPerson)[]) => {
  const people = await Promise.allSettled(urls.map(async (url: string | IPerson) => {
    if (typeof url === 'object') return;
    const id = getId(url);
    const response = await fetchData<IPerson>(url);
    return { id, name: response.name, imageUrl: getPeoplePicture(id) };
  }));
  
  return filterFulfilled(people);
}