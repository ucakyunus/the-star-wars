import { memo } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

import Card from "@/components/ui/card";

import { formatDate } from "@/utils/helper";
import { navs } from "@/utils/constants";

import { IFilmWithId } from "@/types/film";

interface FilmItemProps {
  film: IFilmWithId
}

const Item = ({ film }: FilmItemProps) => {
  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Card title={film.title} href={`${navs.films.href}/${film.id}`}>
        <Box display={"flex"} flexDirection={"column"} gap={0.5}>
          <Typography fontWeight={"bolder"}>Episode</Typography>
          <Typography>{film.episode_id}</Typography>
        </Box>
        
        <Divider sx={{my: 1}}/>
        
        <Box display={"flex"} flexDirection={"column"} gap={0.5}>
          <Typography fontWeight={"bolder"}>Director:</Typography>
          <Typography>{film.director}</Typography>
        </Box>
        
        <Divider sx={{my: 1}}/>
        
        <Box display={"flex"} flexDirection={"column"} gap={0.5}>
          <Typography fontWeight={"bolder"}>Producer(s):</Typography>
          <Typography>{film.producer}</Typography>
        </Box>
        
        <Divider sx={{my: 1}}/>
        
        <Box display={"flex"} flexDirection={"column"} gap={0.5}>
          <Typography fontWeight={"bolder"}>Release Date:</Typography>
          <Typography>{formatDate(film.release_date)}</Typography>
        </Box>
        
        <Divider sx={{my: 1}}/>
        
        <Box display={"flex"} flexDirection={"column"} gap={0.5}>
          <Typography fontWeight={"bolder"}>Opening Crawl:</Typography>
          <Typography dangerouslySetInnerHTML={{__html: film.opening_crawl}}/>
        </Box>
      </Card>
    </Grid>
  )
}

export default memo(Item);