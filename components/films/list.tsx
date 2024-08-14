'use client'

import { memo, useCallback, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useInView } from "react-intersection-observer";

import FilmItem from "@/components/films/item";
import { getFilms } from "@/services/films";

import type { IFilmCustom } from "@/types/film";

interface FilmsListProps {
  list: IFilmCustom[];
  hasMore: boolean;
  query: string;
}

const List = ({ list, hasMore, query }: FilmsListProps) => {
  const { ref, inView } = useInView();
  
  const [films, setFilms] = useState<IFilmCustom[]>(list);
  const [pageNumber, setPageNumber] = useState<number>(2);
  const [hasNext, setHasNext] = useState<boolean>(hasMore);
  
  const loadMore = useCallback(async () => {
    if (hasNext) {
      const moreFilms = await getFilms({ page: +pageNumber, query })
      setFilms([...films, ...moreFilms.results])
      setHasNext(moreFilms.next !== null)
      setPageNumber((prev) => prev + 1);
    }
  }, [hasNext, pageNumber, query, films])
  
  useEffect(() => {
    if (inView) {
      loadMore()
    }
  }, [inView, loadMore])
  
  return (
    <>
      <Typography variant="h4" gutterBottom sx={{ display: {xs: 'block', md: 'none' }}}>
        Films
      </Typography>

      <Grid container spacing={2}>
        {films.map((film: IFilmCustom) => (
          <FilmItem key={film.title} film={film} />
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