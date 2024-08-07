import {fetchData, filterFulfilled, getId} from "@/utils/helper";

import { IStarship, IStarshipDetail, IStarshipResponse, IStarshipWithId } from "@/types/starship";
import { IFilm } from "@/types/film";
import { IPeople } from "@/types/people";

const BASE_URL= process.env.NEXT_PUBLIC_BASE_URL

export const getStarships = async (page: number = 1) => {
  try {
    const data = await fetchData<IStarshipResponse>(`${BASE_URL}/starships/?page=${page}`);
    
    console.log('data', data);
    
    const results = data.results.map((starship: IStarship) => ({
      ...starship,
      id: getId(starship.url)
    })) as IStarshipWithId[]
    
    return { ...data, results }
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


export const getStarship = async (id: string): Promise<IStarshipDetail> => {
  const data = await fetchData<IStarship>(`${BASE_URL}/starships/${id}`);
  
  const films = await Promise.allSettled(data.films.map(async (film: string | IFilm) => {
    if (typeof film === 'object') return;
    const id = getId(film);
    const response = await fetchData<IFilm>(film);
    return { id, title: response.title };
  }));
  
  const characters = await Promise.allSettled(data.pilots.map(async (character: string | IPeople) => {
    if (typeof character === 'object') return;
    const id = getId(character);
    const response = await fetchData<IPeople>(character);
    return { id, name: response.name };
  }));
  
  return {
    ...data,
    films: filterFulfilled(films),
    pilots: filterFulfilled(characters)
  } as IStarshipDetail;
}