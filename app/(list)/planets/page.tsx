import PlanetsList from "@/components/planets/list";
import {getPlanets} from "@/services/planets";


export default async function PlanetsPage() {
  const planets = await getPlanets();
  
  return <PlanetsList list={planets.results} />
}