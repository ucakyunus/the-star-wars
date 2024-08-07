import { fetchData, filterFulfilled, getId } from "@/utils/helper";
import { getFilmsByUrls } from "@/services/films";
import { getPeopleByUrls } from "@/services/people";

import { IStarship, IStarshipDetail, IStarshipResponse, IStarshipWithId } from "@/types/starship";


export const getStarships = async ({ page = 1, query }: { page: number, query?: string }) => {
  try {
    let url = `starships/?page=${page}`;
    
    if(query) {
      url = `starships/?search=${query}&page=${page}`;
    }
    
    const data = await fetchData<IStarshipResponse>(url);
    
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
  const data = await fetchData<IStarship>(`starships/${id}`);
  
  const [films, pilots] = await Promise.all([
    getFilmsByUrls(data.films),
    getPeopleByUrls(data.pilots)
  ]);
  
  return {
    ...data,
    films,
    pilots
  } as IStarshipDetail;
}

export const getStarshipsByUrls = async (urls: string[] | IStarship[]) => {
  const starships = await Promise.allSettled(urls.map(async (url: string | IStarship) => {
    if (typeof url === 'object') return;
    const id = getId(url);
    const response = await fetchData<IStarship>(url);
    return { id, name: response.name };
  }));
  
  return filterFulfilled(starships);
}