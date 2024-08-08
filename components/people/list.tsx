'use client';

import { memo, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useInView } from "react-intersection-observer";

import PeopleItem from "@/components/people/item";
import { getPeople } from "@/services/people";

import { IPersonWithId } from "@/types/people";

interface PeopleListProps {
  list: IPersonWithId[];
  hasMore: boolean;
  query: string;
}

const List = ({ list, hasMore, query }: PeopleListProps) => {
  const { ref, inView } = useInView();
  
  const [people, setPeople] = useState<IPersonWithId[]>(list);
  const [pageNumber, setPageNumber] = useState<number>(2);
  const [hasNext, setHasNext] = useState<boolean>(hasMore);
  
  const loadMore = async () => {
    if (hasNext) {
      const morePeople = await getPeople({ page: +pageNumber, query })
      setPeople([...people, ...morePeople.results])
      setHasNext(morePeople.next !== null)
      setPageNumber((prev) => prev + 1);
    }
  }
  
  useEffect(() => {
    if (inView) {
      loadMore()
    }
  }, [inView])
  
  return (
    <>
      <Typography variant="h4" gutterBottom sx={{ display: {xs: 'block', md: 'none' }}}>
        People
      </Typography>

      <Grid container spacing={2}>
        {people.map((person: IPersonWithId) => (
          <PeopleItem person={person} key={person.name} />
        ))}
      </Grid>

      {hasNext && (
        <Box ref={ref} mt={2}>
          Loading...
        </Box>
      )}
    </>
  )
}

export default memo(List);