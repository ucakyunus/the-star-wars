import type { IPerson} from "@/types/people";
import type { IPlanet } from "@/types/planet";
import type { ISpecie } from "@/types/specie";
import type { IStarship } from "@/types/starship";
import type { IVehicle } from "@/types/vehicle";

export interface IFilm {
  characters: string[] | IPerson[];
  created: Date;
  director: string;
  edited: Date;
  episode_id: string;
  opening_crawl: string;
  planets: string[] | IPlanet[];
  producer: string;
  release_date: Date;
  species: string[] | ISpecie[];
  starships: string[] | IStarship[];
  title: string;
  url: string;
  vehicles: string[] | IVehicle[];
}

export interface IFilmCustom extends IFilm {
  id: string;
  imageUrl: string;
}

export interface IFilmResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IFilm[];
}

interface IFilmDetail extends IFilm {
  imageUrl: string;
  characters: { id: string; name: string; imageUrl: string }[];
  planets: { id: string; name: string; imageUrl: string }[];
  species: { id: string; name: string; imageUrl: string }[];
  starships: { id: string; name: string; imageUrl: string }[];
  vehicles: { id: string; name: string; imageUrl: string }[];
}

