import { fetchData, filterFulfilled, getId } from "@/utils/helper";
import { getFilmsByUrls } from "@/services/films";
import { getPeopleByUrls } from "@/services/people";

import { IVehicle, IVehicleDetail, IVehicleResponse, IVehicleWithId } from "@/types/vehicle";


export const getVehicles = async ({ page = 1, query }: { page: number, query?: string }) => {
  try {
    let url = `vehicles/?page=${page}`;
    
    if (query) {
      url = `vehicles/?search=${query}&page=${page}`;
    }
    
    const data = await fetchData<IVehicleResponse>(url);
    
    const results = data.results.map((vehicle: IVehicle) => ({
      ...vehicle,
      id: getId(vehicle.url)
    })) as IVehicleWithId[]
    
    return { ...data, results }
  } catch (err) {
    console.error(err);
    return {
      count: 0,
      next: "",
      previous: "",
      results: []
    };
  }
}

export const getVehicle = async (id: string): Promise<IVehicleDetail> => {
  const data = await fetchData<IVehicle>(`vehicles/${id}`);
  
  const [films, pilots] = await Promise.all([
    getFilmsByUrls(data.films),
    getPeopleByUrls(data.pilots)
  ]);
  
  return {
    ...data,
    films,
    pilots
  } as IVehicleDetail;
}

export const getVehiclesByUrls = async (urls: string[] | IVehicle[]) => {
  const vehicles = await Promise.allSettled(urls.map(async (url: string | IVehicle) => {
    if (typeof url === 'object') return;
    const id = getId(url);
    const response = await fetchData<IVehicle>(url);
    return { id, name: response.name };
  }));
  
  return filterFulfilled(vehicles);
}