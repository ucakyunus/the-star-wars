import { IPlanet } from "@/types/planet";
import { IPeople } from "@/types/people";
import { IFilm } from "@/types/film";

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
  people: string[] | IPeople[];
  films: string[] | IFilm[];
  skin_colors: string;
  url: string;
}

export interface ISpecieWithId extends ISpecie {
  id: string;
}