import { memo } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import DetailCard from "@/components/ui/cards/detail-card";
import AvatarList from "@/components/ui/avatar-list";
import { formatDate } from "@/utils/helper";

import type { IFilmDetail } from "@/types/film";

interface FilmDetailProps {
  film: IFilmDetail;
}

const Detail = ({ film }: FilmDetailProps) => {
  return (
    <DetailCard title={film.title} sx={{ width: '100%', mb: 5 }}>
      <Stack spacing={4} direction={{ xs: "column", sm: 'row' }}>
        <Box position={"relative"} width={{ xs: '100%', sm: 260 }} height={350} sx={{ borderRadius: 3, overflow: 'hidden' }}>
          <Image src={film.imageUrl} alt={film.title} fill priority quality={100} />
        </Box>
        
        <Stack spacing={1} flex={1}>
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Episode:</Typography>
            <Typography>{film.episode_id}</Typography>
          </Box>

          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Released Date:</Typography>
            <Typography>{formatDate(film.release_date)}</Typography>
          </Box>

          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Director:</Typography>
            <Typography>{film.director}</Typography>
          </Box>

          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Producer(s):</Typography>
            <Typography>{film.producer}</Typography>
          </Box>
      
          <Box display={"flex"} flexDirection={"column"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Opening Crawl:</Typography>
            <Typography dangerouslySetInnerHTML={{ __html: film.opening_crawl }}/>
          </Box>
        </Stack>
      </Stack>
  
      
      {!!film.characters?.length && (
        <>
          <Divider sx={{ mt:3, mb: 2 }} />

          <AvatarList list={film.characters} href={'/people'} title={'Characters'} />
        </>
      )}
      
      {!!film.planets?.length && (
        <>
          <Divider sx={{ my: 2 }} />

          <AvatarList list={film.planets} href={'/planets'} title={'Planets'} />
        </>
      )}
      
      {!!film.starships?.length && (
        <>
          <Divider sx={{ my: 2 }} />

          <AvatarList list={film.starships} href={'/starships'} title={'Starships'} />
        </>
      )}
      
      {!!film.vehicles?.length && (
        <>
          <Divider sx={{ my: 2 }} />

          <AvatarList list={film.vehicles} href={'/vehicles'} title={'Vehicles'} />
        </>
      )}
      
      {!!film.species?.length && (
        <>
          <Divider sx={{ my: 2 }} />

          <AvatarList list={film.species} href={'/species'} title={'Species'} />
        </>
      )}
    </DetailCard>
  )
}

export default memo(Detail);