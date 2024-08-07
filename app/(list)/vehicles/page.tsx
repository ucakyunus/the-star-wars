import VehiclesList from "@/components/vehicles/list";
import { getVehicles } from "@/services/vehicles";

export default async function VehiclesPage() {
  const vehicles = await getVehicles();
  
  return <VehiclesList list={vehicles.results} />
}