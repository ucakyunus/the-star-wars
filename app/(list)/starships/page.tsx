import StarshipList from "@/components/starship/list";
import { getStarships } from "@/services/starships";

interface StarshipsPageProps {
  searchParams: {
    query?: string;
    page?: number;
  }
}

export default async function StarshipsPage({ searchParams }: StarshipsPageProps) {
  const query = searchParams?.query || '';
  const page = searchParams?.page || 1;
  
  const starships = await getStarships({ query, page: +page });
  
  return <StarshipList list={starships.results} hasMore={!!starships.next} query={query} />
}