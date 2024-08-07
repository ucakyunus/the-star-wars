import { getSpecie } from "@/services/species";

export default async function SpeciesDetailPage({ params }: { params: { id: string } }) {
  const specie = await getSpecie(params.id);
  
  return <div>Species: {specie.name}</div>
}