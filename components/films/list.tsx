'use client'

import { memo, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { useInView } from "react-intersection-observer";

import FilmItem from "@/components/films/item";
import { getFilms } from "@/services/films";

import { IFilmWithId } from "@/types/film";
import Box from "@mui/material/Box";

interface FilmsListProps {
  list: IFilmWithId[];
  hasMore: boolean;
  query: string;
}

const List = ({ list, hasMore, query }: FilmsListProps) => {
  const { ref, inView } = useInView();
  
  const [films, setFilms] = useState<IFilmWithId[]>(list);
  const [pageNumber, setPageNumber] = useState<number>(2);
  const [hasNext, setHasNext] = useState<boolean>(hasMore);
  
  const loadMore = async () => {
    if (hasNext) {
      const moreFilms = await getFilms({ page: +pageNumber, query })
      setFilms([...films, ...moreFilms.results])
      setHasNext(moreFilms.next !== null)
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
      {films.map((film: IFilmWithId) => (
        <FilmItem key={film.id} film={film} />
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