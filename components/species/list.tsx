'use client';

import { memo, useCallback, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useInView } from "react-intersection-observer";

import SpecieItem from "@/components/species/item";
import { getSpecies } from "@/services/species";

import type { ISpecieCustom } from "@/types/specie";

interface SpeciesListProps {
  list: ISpecieCustom[];
  hasMore: boolean;
  query: string;
}

const List = ({ list, hasMore, query }: SpeciesListProps) => {
  const { ref, inView } = useInView();
  
  const [species, setSpecies] = useState<ISpecieCustom[]>(list);
  const [pageNumber, setPageNumber] = useState<number>(2);
  const [hasNext, setHasNext] = useState<boolean>(hasMore);
  
  const loadMore = useCallback(async () => {
    if (hasNext) {
      const moreSpecies = await getSpecies({ page: +pageNumber, query })
      setSpecies([...species, ...moreSpecies.results])
      setHasNext(moreSpecies.next !== null)
      setPageNumber((prev) => prev + 1);
    }
  }, [hasNext, pageNumber, query, species])
  
  useEffect(() => {
    if (inView) {
      loadMore()
    }
  }, [inView, loadMore])
  
  return (
    <>
      <Typography variant="h4" gutterBottom sx={{ display: {xs: 'block', md: 'none' }}}>
        Species
      </Typography>

      <Grid container spacing={2}>
        {species.map((specie: ISpecieCustom) => (
          <SpecieItem specie={specie} key={specie.name} />
        ))}
      </Grid>

      {hasNext && (
        <Box ref={ref} mt={2} textAlign="center">
          Loading...
        </Box>
      )}
    </>
  )
}

export default memo(List);