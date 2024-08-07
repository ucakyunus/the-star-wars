import { fetchData, filterFulfilled, getId } from "@/utils/helper";

import { IPeople, IPeopleDetail, IPeopleResponse, IPeopleWithId } from "@/types/people";
import { ISpecie } from "@/types/specie";
import { IStarship } from "@/types/starship";
import { IVehicle } from "@/types/vehicle";
import { IFilm } from "@/types/film";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const getPeople = async (page: number = 1) => {
  try {
    const data = await fetchData<IPeopleResponse>(`${BASE_URL}/people/?page=${page}`);
    
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
  const data = await fetchData<IPeople>(`${BASE_URL}/people/${id}`);
  
  const films = await Promise.allSettled(data.films.map(async (film: string | IFilm) => {
    if (typeof film === 'object') return;
    const id = getId(film);
    const response = await fetchData<IFilm>(film);
    return { id, title: response.title };
  }));
  
  const species = await Promise.allSettled(data.species.map(async (specie: string | ISpecie) => {
    if (typeof specie === 'object') return;
    const id = getId(specie);
    const response = await fetchData<ISpecie>(specie);
    return { id, name: response.name };
  }));
  
  const starships = await Promise.allSettled(data.starships.map(async (starship: string | IStarship) => {
    if (typeof starship === 'object') return;
    const id = getId(starship);
    const response = await fetchData<IStarship>(starship);
    return { id, name: response.name };
  }));
  
  const vehicles = await Promise.allSettled(data.vehicles.map(async (vehicle: string | IVehicle) => {
    if (typeof vehicle === 'object') return;
    const id = getId(vehicle);
    const response = await fetchData<IVehicle>(vehicle);
    return { id, name: response.name };
  }));
  
  return {
    ...data,
    films: filterFulfilled(films),
    species: filterFulfilled(species),
    starships: filterFulfilled(starships),
    vehicles: filterFulfilled(vehicles)
  } as IPeopleDetail;
}