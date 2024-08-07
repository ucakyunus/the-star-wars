import type { Metadata } from "next";
import FilmDetail from "@/components/films/detail";
import { getFilm } from "@/services/films";

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  
  const film = await getFilm(id);
  
  return {
    title: film.title,
    description: film.opening_crawl,
  };
}

export default async function FilmsDetailPage({ params }: Props) {
  const film = await getFilm(params.id);
  
  return <FilmDetail film={film} />;
}