import { IPerson } from "@/types/people";
import { IFilm } from "@/types/film";

export interface IVehicle {
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: Date;
  crew: string;
  edited: Date;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilots: string[] | IPerson[];
  films: string[] | IFilm[];
  url: string;
  vehicle_class: string;
}

export interface IVehicleWithId extends IVehicle {
  id: string;
}

export interface IVehicleResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IVehicle[];
}

export interface IVehicleDetail extends IVehicle {
  films: { id: string; title: string; }[];
  pilots: { id: string; name: string; }[];
}

