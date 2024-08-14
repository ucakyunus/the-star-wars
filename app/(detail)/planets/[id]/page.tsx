import type { Metadata } from "next";

import PlanetsDetail from "@/components/planets/detail";
import { getPlanet } from "@/services/planets";

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  
  const planet = await getPlanet(id);
  
  return {
    title: planet.name,
  };
}

export default async function PlanetsDetailPage({ params }: Props) {
  const planet = await getPlanet(params.id);
  
  return <PlanetsDetail planet={planet} />
}