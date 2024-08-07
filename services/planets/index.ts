import { fetchData, filterFulfilled, getId } from "@/utils/helper";
import { IPlanet, IPlanetResponse, IPlanetWithId } from "@/types/planet";

export const getPlanets = async (page: number = 1) => {
  try {
    const response = await fetch(`planets/?page=${page}`);
    const data = (await response.json()) as IPlanetResponse;
    
    const results = data.results?.map((planet: IPlanet) => ({
      ...planet,
      id: getId(planet.url)
    })) as IPlanetWithId[]
    
    
    return {
      ...data,
      results
    };
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

export const getPlanet = async (id: string) => {
  const response = await fetch(`planets/${id}`);
  return await response.json();
}

export const getPlanetsByUrls = async (urls: string[] | IPlanet[]) => {
  const planets = await Promise.allSettled(urls.map(async (url: string | IPlanet) => {
    if (typeof url === 'object') return;
    const id = getId(url);
    const response = await fetchData<IPlanet>(url);
    return { id, name: response.name };
  }));
  
  return filterFulfilled(planets);
}