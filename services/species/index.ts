import { fetchData, filterFulfilled, getId } from "@/utils/helper";
import { ISpecie } from "@/types/specie";

export const getSpecies = async () => {
  const response = await fetch(`species`);
  
  const data = await response.json();
  
  const results = data.results.map((specie: ISpecie) => ({
    ...specie,
    id: specie.url.split('/').at(-2)
  }))
  
  return { ...data, results };
}

export const getSpecie = async (id: string) => {
  const response = await fetch(`species/${id}`);
  return await response.json();
}

export const getSpeciesByUrls = async (urls: string[] | ISpecie[]) => {
  const species = await Promise.allSettled(urls.map(async (url: string | ISpecie) => {
    if (typeof url === 'object') return;
    const id = getId(url);
    const response = await fetchData<ISpecie>(url);
    return { id, name: response.name };
  }));
  
  return filterFulfilled(species);
}