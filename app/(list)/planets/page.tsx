import PlanetsList from "@/components/planets/list";
import {getPlanets} from "@/services/planets";

interface PlanetsPageProps {
  searchParams: {
    query?: string;
    page?: number;
  }
}

export default async function PlanetsPage({ searchParams }: PlanetsPageProps) {
  const query = searchParams?.query || '';
  const page = searchParams?.page || 1;
  
  const planets = await getPlanets({ query, page: +page });
  
  return <PlanetsList list={planets.results} hasMore={!!planets.next} query={query}/>
}