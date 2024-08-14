import { getId, filterFulfilled } from "@/utils/helper";
import { getPeopleByUrls } from "@/services/people";
import { getStarshipsByUrls } from "@/services/starships";
import { getPlanetsByUrls } from "@/services/planets";
import { getSpeciesByUrls } from "@/services/species";
import { getVehiclesByUrls } from "@/services/vehicles";
import { getFilmPicture } from "@/utils/picture-urls";
import { fetchData } from "@/utils/api";

import type { IFilm, IFilmDetail, IFilmResponse, IFilmCustom } from "@/types/film";

export const getFilms = async ({ page = 1, query }: { page: number, query?: string }) => {
  try {
    let url = `films/?page=${page}`;
    
    if (query) {
      url = `films/?search=${query}&page=${page}`;
    }
    
    const data = await fetchData<IFilmResponse>(url);
    const results = data.results?.map((film: IFilm) => ({
      ...film,
      id: getId(film.url),
      imageUrl: getFilmPicture(getId(film.url))
    })) as IFilmCustom[];
    
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
  const data = await fetchData<IFilm>(`films/${id}`);
  
  const [characters, planets, species, starships, vehicles] = await Promise.all([
    getPeopleByUrls(data.characters),
    getPlanetsByUrls(data.planets),
    getSpeciesByUrls(data.species),
    getStarshipsByUrls(data.starships),
    getVehiclesByUrls(data.vehicles)
  ]);
  
  return {
    ...data,
    imageUrl: getFilmPicture(id),
    characters,
    planets,
    species,
    starships,
    vehicles
  } as IFilmDetail;
};

export const getFilmsByUrls = async (urls: string[] | IFilm[]) => {
  const films = await Promise.allSettled(urls.map(async (url: string | IFilm) => {
    if (typeof url === 'object') return;
    const id = getId(url);
    const response = await fetchData<IFilm>(url);
    return { id, title: response.title, imageUrl: getFilmPicture(id) };
  }));
  
  return filterFulfilled(films);
}