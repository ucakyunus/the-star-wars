import type { Metadata } from "next";
import { getStarship } from "@/services/starships";
import StarshipDetail from "@/components/starship/detail";

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  
  const starship = await getStarship(id);
  
  return {
    title: starship.name,
  };
}


export default async function StarshipsDetailPage({ params }: Props) {
  const starship = await getStarship(params.id);
  
  return <StarshipDetail starship={starship} />
}