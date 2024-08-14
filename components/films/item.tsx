import { memo } from "react";
import Grid from "@mui/material/Grid";

import ItemCard from "@/components/ui/cards/item-card";
import { navs } from "@/utils/constants";

import type { IFilmCustom } from "@/types/film";

interface FilmItemProps {
  film: IFilmCustom
}

const Item = ({ film }: FilmItemProps) => {
  return (
    <Grid item xs={6} sm={4} lg={3}>
      <ItemCard 
        href={`${navs.films.href}/${film.id}`} 
        label={film.title} 
        image={{  url: film.imageUrl }}
      />
    </Grid>
  )
}

export default memo(Item);