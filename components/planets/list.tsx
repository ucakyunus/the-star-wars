'use client';

import { memo, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useInView } from "react-intersection-observer";

import PlanetItem from "@/components/planets/item";
import { getPlanets } from "@/services/planets";

import { IPlanetWithId } from "@/types/planet";

interface PlanetListProps {
  list: IPlanetWithId[];
  hasMore: boolean;
  query: string;
}

const List = ({ list, hasMore, query }: PlanetListProps) => {
  const { ref, inView } = useInView();
  
  const [planets, setPlanets] = useState<IPlanetWithId[]>(list);
  const [pageNumber, setPageNumber] = useState<number>(2);
  const [hasNext, setHasNext] = useState<boolean>(hasMore);
  
  const loadMore = async () => {
    if (hasNext) {
      const morePlanets = await getPlanets({ page: +pageNumber, query })
      setPlanets([...planets, ...morePlanets.results])
      setHasNext(morePlanets.next !== null)
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
      {planets.map((planet: IPlanetWithId) => (
        <PlanetItem planet={planet} key={planet.name} />
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