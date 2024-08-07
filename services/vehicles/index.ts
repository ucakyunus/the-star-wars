import { IVehicle } from "@/types/vehicle";

const BASE_URL = process.env.BASE_URL

export const getVehicles = async () => {
  const response = await fetch(`${BASE_URL}/vehicles`);
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
  const response = await fetch(`${BASE_URL}/vehicles/${id}`);
  return await response.json();
}

