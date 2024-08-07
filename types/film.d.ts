import { IPeople } from "@/types/people";
import { IPlanet } from "@/types/planet";
import { ISpecie } from "@/types/specie";
import { IStarship } from "@/types/starship";
import { IVehicle } from "@/types/vehicle";

export interface IFilm {
  characters: string[] | IPeople[];
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

export interface IFilmWithId extends IFilm {
  id: string;
}

export interface IFilmResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IFilm[];
}

interface IFilmDetail extends IFilm {
  characters: { id: string; name: string; }[];
  planets: { id: string; name: string; }[];
  species: { id: string; name: string; }[];
  starships: { id: string; name: string; }[];
  vehicles: { id: string; name: string; }[];
}

