import SpecieDetail from "@/components/species/detail";
import { getSpecie } from "@/services/species";
import type {Metadata} from "next";

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  
  const specie = await getSpecie(id);
  
  return {
    title: specie.name,
  };
}

const SpeciesDetailPage = ({ params }: Props) => {
  return <SpecieDetail specieId={params.id!}/>
}

export default SpeciesDetailPage;