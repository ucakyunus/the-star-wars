'use server'

import { getId, fetchData, filterFulfilled } from "@/utils/helper";

import { ISpecie } from "@/types/specie";
import { IVehicle } from "@/types/vehicle";
import { IStarship } from "@/types/starship";
import { IPlanet } from "@/types/planet";
import { IPeople } from "@/types/people";
import { IFilm, IFilmDetail, IFilmResponse, IFilmWithId } from "@/types/film";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const getFilms = async (page: number = 1) => {
  try {
    const data = await fetchData<IFilmResponse>(`${BASE_URL}/films/?page=${page}`);
    const results = data.results?.map((film: IFilm) => ({
      ...film,
      id: getId(film.url)
    })) as IFilmWithId[];
    
    return {
      ...data,
      results: results.sort((a: { episode_id: string }, b: { episode_id: string }) => +a.episode_id - +b.episode_id)
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
};

export const getFilm = async (id: string): Promise<IFilmDetail> => {
  const data = await fetchData<IFilm>(`${BASE_URL}/films/${id}`);
  
  const characters = await Promise.allSettled(data.characters.map(async (character: string | IPeople) => {
    if (typeof character === 'object') return;
    const id = getId(character);
    const response = await fetchData<IPeople>(character);
    return { id, name: response.name };
  }));
  
  const planets = await Promise.allSettled(data.planets.map(async (planet: string | IPlanet) => {
    if (typeof planet === 'object') return;
    const id = getId(planet);
    const response = await fetchData<IPlanet>(planet);
    return { id, name: response.name };
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
    characters: filterFulfilled(characters),
    planets: filterFulfilled(planets),
    species: filterFulfilled(species),
    starships: filterFulfilled(starships),
    vehicles: filterFulfilled(vehicles)
  } as IFilmDetail;
};