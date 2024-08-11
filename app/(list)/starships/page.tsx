import type { Metadata } from 'next';

import StarshipList from "@/components/starships/list";
import { getStarships } from "@/services/starships";

interface StarshipsPageProps {
  searchParams: {
    query?: string;
    page?: number;
  }
}

export const metadata: Metadata = {
  title: 'Starships',
}

export default async function StarshipsPage({ searchParams }: StarshipsPageProps) {
  const query = searchParams?.query || '';
  const page = searchParams?.page || 1;
  
  const starships = await getStarships({ query, page: +page });
  
  return <StarshipList list={starships.results} hasMore={!!starships.next} query={query} />
}