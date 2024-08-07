import type { Metadata } from "next";
import PeopleDetail from "@/components/people/detail";
import { getPerson } from "@/services/people";

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  
  const person = await getPerson(id);
  
  return {
    title: person.name,
  };
}


export default async function PeopleDetailPage({ params }: Props) {
  const person = await getPerson(params.id);
  
  return <PeopleDetail person={person} />
}