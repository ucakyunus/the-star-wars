import { fetchData, filterFulfilled, getId } from "@/utils/helper";
import { getFilmsByUrls } from "@/services/films";
import { getStarshipsByUrls } from "@/services/starships";
import { getSpeciesByUrls } from "@/services/species";
import { getVehiclesByUrls } from "@/services/vehicles";

import { IPeople, IPeopleDetail, IPeopleResponse, IPeopleWithId } from "@/types/people";

export const getPeople = async ({ page = 1, query }: { page: number, query?: string }) => {
  try {
    let url = `people/?page=${page}`;
    
    if(query) {
      url = `people/?search=${query}&page=${page}`;
    }
    
    const data = await fetchData<IPeopleResponse>(url);
    
    const results = data.results.map((person: IPeople) => ({
      ...person,
      id: getId(person.url)
    })) as IPeopleWithId[];
    
    return {...data, results};
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

export const getPerson = async (id: string): Promise<IPeopleDetail> => {
  const data = await fetchData<IPeople>(`people/${id}`);
  
  const [films, species, starships, vehicles] = await Promise.all([
    getFilmsByUrls(data.films),
    getSpeciesByUrls(data.species),
    getStarshipsByUrls(data.starships),
    getVehiclesByUrls(data.vehicles)
  ]);
  
  return {
    ...data,
    films,
    species,
    starships,
    vehicles
  } as IPeopleDetail;
}

export const getPeopleByUrls = async (urls: string[] | IPeople[]) => {
  const people = await Promise.allSettled(urls.map(async (url: string | IPeople) => {
    if (typeof url === 'object') return;
    const id = getId(url);
    const response = await fetchData<IPeople>(url);
    return { id, name: response.name };
  }));
  
  return filterFulfilled(people);
}