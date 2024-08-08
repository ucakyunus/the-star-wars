import { fetchData, filterFulfilled, getId } from "@/utils/helper";
import { getFilmsByUrls } from "@/services/films";
import { getPeopleByUrls } from "@/services/people";

import { ISpecie, ISpecieDetail, ISpecieResponse, ISpecieWithId } from "@/types/specie";

export const getSpecies = async ({ page = 1, query }: { page: number, query?: string }) => {
  try {
    let url = `species/?page=${page}`;
    
    if(query) {
      url = `species/?search=${query}&page=${page}`;
    }
    const data = await fetchData<ISpecieResponse>(url);
    
    const results = data.results.map((specie: ISpecie) => ({
      ...specie,
      id: getId(specie.url)
    })) as ISpecieWithId[];
    
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

export const getSpecie = async (id: string): Promise<ISpecieDetail> => {
  const data = await fetchData<ISpecie>(`species/${id}`);
  
  const [films, people] = await Promise.all([
    getFilmsByUrls(data.films),
    getPeopleByUrls(data.people)
  ]);
  
  return {
    ...data,
    films,
    people
  } as ISpecieDetail;
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