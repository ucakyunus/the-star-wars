'use client';

import { memo, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useInView } from "react-intersection-observer";

import PeopleItem from "@/components/people/item";
import { getPeople } from "@/services/people";

import { IPeopleWithId } from "@/types/people";

interface PeopleListProps {
  list: IPeopleWithId[];
  hasMore: boolean;
}

const PeopleList = ({ list, hasMore }: PeopleListProps) => {
  const { ref, inView } = useInView();
  
  const [people, setPeople] = useState<IPeopleWithId[]>(list);
  const [pageNumber, setPageNumber] = useState<number>(2);
  const [hasNext, setHasNext] = useState<boolean>(hasMore);
  
  const loadMore = async () => {
    if (hasNext) {
      const morePeople = await getPeople(pageNumber)
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
    <Grid container spacing={2}>
      {people.map((person: IPeopleWithId) => (
        <PeopleItem person={person} key={person.id} />
      ))}
      
      {hasNext && (
        <Box ref={ref} mt={2}>
          Loading...
        </Box>
      )}
    </Grid>
  )
}

export default memo(PeopleList);