'use client';

import { memo, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useInView } from "react-intersection-observer";

import SpecieItem from "@/components/species/item";
import { getSpecies } from "@/services/species";

import { ISpecieWithId } from "@/types/specie";

interface SpeciesListProps {
  list: ISpecieWithId[];
  hasMore: boolean;
  query: string;
}

const List = ({ list, hasMore, query }: SpeciesListProps) => {
  const { ref, inView } = useInView();
  
  const [species, setSpecies] = useState<ISpecieWithId[]>(list);
  const [pageNumber, setPageNumber] = useState<number>(2);
  const [hasNext, setHasNext] = useState<boolean>(hasMore);
  
  const loadMore = async () => {
    if (hasNext) {
      const moreSpecies = await getSpecies({ page: +pageNumber, query })
      setSpecies([...species, ...moreSpecies.results])
      setHasNext(moreSpecies.next !== null)
      setPageNumber((prev) => prev + 1);
    }
  }
  
  useEffect(() => {
    if (inView) {
      loadMore()
    }
  }, [inView])
  
  return (
    <Grid container spacing={2}>
      {species.map((specie: ISpecieWithId) => (
        <SpecieItem specie={specie} key={specie.id} />
      ))}
      
      {hasNext && (
        <Box ref={ref} mt={2}>
          Loading...
        </Box>
      )}
    </Grid>
  )
}

export default memo(List);