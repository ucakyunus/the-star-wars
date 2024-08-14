import type { IPlanet } from "@/types/planet";
import type { IPerson } from "@/types/people";
import type { IFilm } from "@/types/film";

export interface ISpecie {
  average_height: string;
  average_lifespan: string;
  classification: string;
  created: Date;
  designation: string;
  edited: Date;
  eye_colors: string;
  hair_colors: string;
  homeworld: string | IPlanet;
  language: string;
  name: string;
  people: string[] | IPerson[];
  films: string[] | IFilm[];
  skin_colors: string;
  url: string;
}

export interface ISpecieCustom extends ISpecie {
  id: string;
  imageUrl: string;
}

export interface ISpecieResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ISpecie[];
}

export interface ISpecieDetail extends ISpecie {
  imageUrl: string
  people: { id: string; name: string; imageUrl: string }[];
  films: { id: string; title: string; imageUrl: string }[];
}