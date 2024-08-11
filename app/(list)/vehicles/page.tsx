import type { Metadata } from 'next';

import VehiclesList from "@/components/vehicles/list";
import { getVehicles } from "@/services/vehicles";

interface VehiclesPageProps {
  searchParams: {
    query?: string;
    page?: number;
  }
}

export const metadata: Metadata = {
  title: 'Vehicles',
}

export default async function VehiclesPage({ searchParams }: VehiclesPageProps) {
  const query = searchParams?.query || '';
  const page = searchParams?.page || 1;
  
  const vehicles = await getVehicles({ query, page: +page });
  
  return <VehiclesList list={vehicles.results} hasMore={!!vehicles.next} query={query} />
}