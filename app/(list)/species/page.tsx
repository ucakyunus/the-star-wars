import SpeciesList from "@/components/species/list";
import { getSpecies } from "@/services/species";

export default async function SpeciesPage() {
  const species = await getSpecies();
  
  return <SpeciesList list={species.results} />
}
