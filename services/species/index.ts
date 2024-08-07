import { ISpecie } from "@/types/specie";

const BASE_URL = process.env.BASE_URL

export const getSpecies = async () => {
  const response = await fetch(`${BASE_URL}/species`);
  
  const data = await response.json();
  
  const results = data.results.map((specie: ISpecie) => ({
    ...specie,
    id: specie.url.split('/').at(-2)
  }))
  
  return { ...data, results };
}

export const getSpecie = async (id: string) => {
  const response = await fetch(`${BASE_URL}/species/${id}`);
  return await response.json();
}