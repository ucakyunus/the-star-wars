'use client';

import { memo, useCallback, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useInView } from "react-intersection-observer";

import PeopleItem from "@/components/people/item";
import { getPeople } from "@/services/people";

import type { IPersonCustom } from "@/types/people";

interface PeopleListProps {
  list: IPersonCustom[];
  hasMore: boolean;
  query: string;
}

const List = ({ list, hasMore, query }: PeopleListProps) => {
  const { ref, inView } = useInView();
  
  const [people, setPeople] = useState<IPersonCustom[]>(list);
  const [pageNumber, setPageNumber] = useState<number>(2);
  const [hasNext, setHasNext] = useState<boolean>(hasMore);
  
  const loadMore = useCallback(async () => {
    if (hasNext) {
      const morePeople = await getPeople({ page: +pageNumber, query })
      setPeople([...people, ...morePeople.results])
      setHasNext(morePeople.next !== null)
      setPageNumber((prev) => prev + 1);
    }
  }, [hasNext, pageNumber, query, people])
  
  useEffect(() => {
    if (inView) {
      loadMore()
    }
  }, [inView, loadMore])
  
  return (
    <>
      <Typography variant="h4" gutterBottom sx={{ display: {xs: 'block', md: 'none' }}}>
        People
      </Typography>

      <Grid container spacing={2}>
        {people.map((person: IPersonCustom) => (
          <PeopleItem person={person} key={person.name} />
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