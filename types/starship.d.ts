import { IFilm } from "@/types/film";
import { IPerson } from "@/types/people";

export interface IStarship {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: Date;
  crew: string;
  edited: Date;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  films: string[] | IFilm[];
  pilots: string[] | IPerson[];
  starship_class: string;
  url: string;
}

export interface IStarshipWithId extends IStarship {
  id: string;
}

export interface IStarshipResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IStarship[];
}

export interface IStarshipDetail extends IStarship {
  imageUrl: string;
  films: { id: string; title: string, imageUrl: string }[];
  pilots: { id: string; name: string, imageUrl: string }[];
}

