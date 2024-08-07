import { IFilm } from "@/types/film";
import { IPlanet } from "@/types/planet";

export interface IPeople {
  birth_year: string;
  eye_color: string;
  films: string[] | IFilm[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string | IPlanet;
  mass: string;
  name: string;
  skin_color: string;
  created: Date;
  edited: Date;
  species: string[] | ISpecie[];
  starships: string[] | IStarship[];
  url: string;
  vehicles: string[] | IVehicle[];
}

export interface IPeopleWithId extends IPeople {
  id: string;
}

export interface IPeopleResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPeople[];
}

export interface IPeopleDetail extends IPeople {
  films: {id: string; title: string}[];
  species: { id: string; name: string; }[];
  starships: { id: string; name: string; }[];
  vehicles: { id: string; name: string; }[];
}

