import type { Metadata } from 'next';

import SpeciesList from "@/components/species/list";
import { getSpecies } from "@/services/species";

interface SpeciesPageProps {
  searchParams: {
    query?: string;
    page?: number;
  }
}

export const metadata: Metadata = {
  title: 'Species',
}

export default async function SpeciesPage({ searchParams }: SpeciesPageProps) {
  const query = searchParams?.query || '';
  const page = searchParams?.page || 1;
  
  const species = await getSpecies({ query, page: +page });
  
  return <SpeciesList list={species.results} hasMore={!!species.next} query={query} />
}
