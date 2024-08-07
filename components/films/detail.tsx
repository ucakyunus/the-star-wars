import Link from "next/link";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import Card from "@/components/ui/card";
import { formatDate } from "@/utils/helper";

import { IFilmDetail } from "@/types/film";

interface FilmDetailProps {
  film: IFilmDetail;
}

const FilmDetail = ({ film }: FilmDetailProps) => {
  return (
    <Card title={film.title} sx={{ width: '100%', mb: 5 }}>
      <Box display={"flex"} flexDirection={"column"} gap={0.5}>
        <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Episode</Typography>
        <Typography>{film.episode_id}</Typography>
      </Box>
      
      <Divider sx={{ my: 1.5 }} />
      
      <Box display={"flex"} flexDirection={"column"} gap={0.5}>
        <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Released Date</Typography>
        <Typography>{formatDate(film.release_date)}</Typography>
      </Box>
      
      <Divider sx={{ my: 1.5 }} />
      
      <Box display={"flex"} flexDirection={"column"} gap={0.5}>
        <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Director</Typography>
        <Typography>{film.director}</Typography>
      </Box>
      
      <Divider sx={{ my: 1.5 }} />
      
      <Box display={"flex"} flexDirection={"column"} gap={0.5}>
        <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Producer(s)</Typography>
        <Typography>{film.producer}</Typography>
      </Box>
      
      <Divider sx={{ my: 1.5 }} />
      
      <Box display={"flex"} flexDirection={"column"} gap={0.5}>
        <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Opening Crawl</Typography>
        <Typography dangerouslySetInnerHTML={{__html: film.opening_crawl}}/>
      </Box>
      
      {!!film.characters?.length && (
        <>
          <Divider sx={{ my: 1.5 }} />
          
          <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Characters</Typography>
          {film.characters.map((character) => (
            <Link href={`/people/${character.id}`} key={character.id} passHref>
              <Chip label={character.name} variant={"outlined"} sx={{ m: 0.5 }}/>
            </Link>
          ))}
        </>
      )}
      
      {!!film.planets?.length && (
        <>
          <Divider sx={{ my: 1.5 }} />
          
          <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Planets</Typography>
          {film.planets.map((planet) => (
            <Link href={`/planets/${planet.id}`} key={planet.id} passHref>
              <Chip label={planet.name} variant={"outlined"} sx={{ m: 0.5 }}/>
            </Link>
          ))}
        </>
      )}
      
      {!!film.starships?.length && (
        <>
          <Divider sx={{ my: 1.5 }} />
      
          <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Starships</Typography>
          {film.starships.map((starship) => (
            <Link href={`/starships/${starship.id}`} key={starship.id} passHref>
              <Chip label={starship.name} variant={"outlined"} sx={{ m: 0.5 }}/>
            </Link>
          ))}
        </>
      )}
      
      {!!film.vehicles?.length && (
        <>
          <Divider sx={{ my: 1.5 }} />
          
          <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Vehicles</Typography>
          {film.vehicles.map((vehicle) => (
            <Link href={`/vehicles/${vehicle.id}`} key={vehicle.id} passHref>
              <Chip label={vehicle.name} variant={"outlined"} sx={{ m: 0.5 }}/>
            </Link>
          ))}
        </>
      )}
      
      {!!film.species?.length && (
        <>
          <Divider sx={{ my: 1.5 }} />
          
          <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Species</Typography>
          {film.species.map((specie) => (
            <Link href={`/species/${specie.id}`} key={specie.id} passHref>
              <Chip label={specie.name} variant={"outlined"} sx={{ m: 0.5 }}/>
            </Link>
          ))}
        </>
      )}
    </Card>
  )
}

export default FilmDetail;