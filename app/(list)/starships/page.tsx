import StarshipList from "@/components/starship/list";
import { getStarships } from "@/services/starships";

export default async function StarshipsPage() {
  const starships = await getStarships();
  
  return <StarshipList list={starships.results} hasMore={!!starships.next}/>
}