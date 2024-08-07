import { fetchData, filterFulfilled, getId } from "@/utils/helper";
import { IVehicle } from "@/types/vehicle";

export const getVehicles = async () => {
  const response = await fetch(`vehicles`);
  const data =  await response.json();
  
  const results = data.results.map((vehicle: IVehicle) => ({
    ...vehicle,
    id: vehicle.url.split('/').at(-2)
  }))
  
  return {
    ...data,
    results
  }
}

export const getVehicle = async (id: string) => {
  const response = await fetch(`vehicles/${id}`);
  return await response.json();
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