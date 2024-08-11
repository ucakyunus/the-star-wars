import type { Metadata } from 'next';

import FilmsList from "@/components/films/list";
import { getFilms } from "@/services/films";

interface FilmsPageProps {
  searchParams: {
    query?: string;
    page?: number;
  }
}

export const metadata: Metadata = {
  title: 'Films',
}

export default async function FilmsPage({ searchParams }: FilmsPageProps) {
  const query = searchParams?.query || '';
  const page = searchParams?.page || 1;
  
  const films = await getFilms({ query, page: +page });
  
  return <FilmsList list={films.results} hasMore={!!films.next} query={query} />
}