import FilmsList from "@/components/films/list";
import { getFilms } from "@/services/films";

export default async function FilmsPage() {
  const films = await getFilms();
  
  return <FilmsList list={films.results} hasMore={!!films.next} />
}