import { getPlanet } from "@/services/planets";

export default async function PlanetsDetailPage({ params }: { params: { id: string } }) {
  const planet = await getPlanet(params.id);
  
  return <div>Planet: {planet.name}</div>
}