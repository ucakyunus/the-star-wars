import type { Metadata } from "next";

import VehicleDetail from "@/components/vehicles/detail";
import { getVehicle } from "@/services/vehicles";

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  
  const vehicle = await getVehicle(id);
  
  return {
    title: vehicle.name,
  };
}

const VehiclesDetailPage = ({ params }: Props) => {  
  return <VehicleDetail vehicleId={params.id!} />
}

export default VehiclesDetailPage;