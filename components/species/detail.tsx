'use client';

import { useEffect } from "react";

import VehiclesLoading from "@/components/vehicles/loading";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchSpecieDetail, getLoading, getSpeciesDetail } from "@/store/features/details";

interface SpecieDetailProps {
  specieId: string;
}

const Detail = ({ specieId }: SpecieDetailProps) => {
  const dispatch = useAppDispatch();
  
  const specie = useAppSelector(getSpeciesDetail);
  const isLoading = useAppSelector(getLoading);
  
  useEffect(() => {
    dispatch(fetchSpecieDetail(specieId));
  }, [dispatch, specieId]);
  
  if(isLoading || !specie) {
    return <VehiclesLoading />
  }
  
  return (
    <div>
      <h1>Detail : {specieId}</h1>
    </div>
  );
}

export default Detail;