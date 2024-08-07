import PeopleList from "@/components/people/list";
import { getPeople } from "@/services/people";

export default async function PeoplePage() {
  const people = await getPeople();
  
  return <PeopleList list={people.results} hasMore={!!people.next} />
}