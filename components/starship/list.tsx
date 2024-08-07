'use client';

import { memo, useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useInView } from "react-intersection-observer";

import StarshipItem from "@/components/starship/item";
import { getStarships } from "@/services/starships";

import { IStarshipWithId } from "@/types/starship";

interface StarshipListProps {
  list: IStarshipWithId[];
  hasMore: boolean;
  query: string;
}

const StarshipList = ({ list, hasMore, query }: StarshipListProps) => {
  const { ref, inView } = useInView();
  
  const [starships, setStarships] = useState<IStarshipWithId[]>(list);
  const [pageNumber, setPageNumber] = useState<number>(2);
  const [hasNext, setHasNext] = useState<boolean>(hasMore);
  
  const loadMore = async () => {
    if (hasNext) {
      const moreStarships = await getStarships({ page: +pageNumber, query })
      setStarships([...starships, ...moreStarships.results])
      setHasNext(moreStarships.next !== null)
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
      {starships.map((starship: IStarshipWithId) => (
        <StarshipItem starship={starship} key={starship.id} />
      ))}
      
      {hasNext && (
        <Box ref={ref} mt={2}>
          Loading...
        </Box>
      )}
    </Grid>
  );
}

export default memo(StarshipList);