import { IFilm } from "@/types/film";
import { IPerson } from "@/types/people";

export interface IPlanet {
  climate: string;
  created: Date;
  diameter: string;
  edited: Date;
  films: string[] | IFilm[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[] | IPerson[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}

export interface IPlanetWithId extends IPlanet {
  id: string;
}

export interface IPlanetResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPlanet[];
}

export interface IPlanetDetail extends IPlanet {
  imageUrl: string;
  films: { id: string; title: string; imageUrl: string }[];
  residents: { id: string; name: string; imageUrl: string }[];
}