import PeopleList from "@/components/people/list";
import { getPeople } from "@/services/people";

interface PeoplePageProps {
  searchParams: {
    query?: string;
    page?: number;
  }
}

export default async function PeoplePage({ searchParams }: PeoplePageProps) {
  const query = searchParams?.query || '';
  const page = searchParams?.page || 1;
  
  const people = await getPeople({ query, page: +page });
  
  return <PeopleList list={people.results} hasMore={!!people.next} query={query} />
}