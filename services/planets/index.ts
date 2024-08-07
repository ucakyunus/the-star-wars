import { getId } from "@/utils/helper";
import { IPlanet, IPlanetResponse, IPlanetWithId } from "@/types/planet";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getPlanets = async (page: number = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/planets/?page=${page}`);
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
  const response = await fetch(`${BASE_URL}/planets/${id}`);
  return await response.json();
}