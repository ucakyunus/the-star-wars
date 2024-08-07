import { getVehicle } from "@/services/vehicles";

export default async function VehiclesDetailPage({ params }: { params: { id: string } }) {
  const vehicle = await getVehicle(params.id);
  
  return <div>Vehicle: {vehicle.name}</div>
}