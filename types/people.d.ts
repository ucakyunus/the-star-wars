import type { IFilm } from "@/types/film";
import type { IPlanet } from "@/types/planet";

export interface IPerson {
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

export interface IPersonCustom extends IPerson {
  id: string;
  imageUrl: string;
}

export interface IPersonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPerson[];
}

export interface IPersonDetail extends IPerson {
  imageUrl: string;
  homeworld: { id: string; name: string; imageUrl: string };
  films: { id: string; title: string; imageUrl: string }[];
  species: { id: string; name: string; imageUrl: string }[];
  starships: { id: string; name: string; imageUrl: string }[];
  vehicles: { id: string; name: string; imageUrl: string }[];
}

