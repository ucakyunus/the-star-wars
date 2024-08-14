import { memo } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import DetailCard from "@/components/ui/cards/detail-card";
import { toTitleCase } from "@/utils/helper";

import { IPersonDetail } from "@/types/people";

interface PeopleDetailProps {
  person: IPersonDetail;
}

const Detail = ({ person }: PeopleDetailProps) => {
  return (
    <DetailCard title={person.name} sx={{ width: '100%', mb: 5 }}>
      <Box display={"flex"} flexDirection={"column"} gap={0.5}>
        <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Birth Year</Typography>
        <Typography>{person.birth_year}</Typography>
      </Box>
      
      <Divider sx={{ my: 1.5 }} />
      
      <Box display={"flex"} flexDirection={"column"} gap={0.5}>
        <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Height</Typography>
        <Typography>{person.height} cm</Typography>
      </Box>
      
      <Divider sx={{ my: 1.5 }} />
      
      <Box display={"flex"} flexDirection={"column"} gap={0.5}>
        <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Mass</Typography>
        <Typography>{person.mass} kg</Typography>
      </Box>
      
      <Divider sx={{ my: 1.5 }} />
      
      <Box display={"flex"} flexDirection={"column"} gap={0.5}>
        <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Gender</Typography>
        <Typography>{toTitleCase(person.gender)}</Typography>
      </Box>
      
      <Divider sx={{ my: 1.5 }} />
      
      <Box display={"flex"} flexDirection={"column"} gap={0.5}>
        <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Hair Color</Typography>
        <Typography>{toTitleCase(person.hair_color)}</Typography>
      </Box>
      
      <Divider sx={{ my: 1.5 }} />
      
      <Box display={"flex"} flexDirection={"column"} gap={0.5}>
        <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Skin Color</Typography>
        {person?.skin_color?.toLowerCase() === 'unknown' ? (
          <Typography>
            &#8212;
          </Typography>
        ) : (
          <Typography>{toTitleCase(person.skin_color)}</Typography>
        )}
      </Box>
      
      <Divider sx={{ my: 1.5 }} />
      
      <Box display={"flex"} flexDirection={"column"} gap={0.5}>
        <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Eye Color</Typography>
        <Typography>{toTitleCase(person.eye_color)}</Typography>
      </Box>
      
      {!!person.films?.length && (
        <>
          <Divider sx={{ my: 1.5 }} />
      
          <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Films</Typography>
          {person.films.map((film) => (
            <Link href={`/films/${film.id}`} key={film.id} passHref>
              <Chip label={film.title} variant={"outlined"} sx={{ m: 0.5 }}/>
            </Link>
          ))}
        </>
      )}
      
      {!!person.starships?.length && (
        <>
          <Divider sx={{ my: 1.5 }} />
      
          <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Starships</Typography>
          {person.starships.map((starship) => (
            <Link href={`/starships/${starship.id}`} key={starship.id} passHref>
              <Chip label={starship.name} variant={"outlined"} sx={{ m: 0.5 }}/>
            </Link>
          ))}
        </>
      )}
      
      {!!person.vehicles?.length && (
        <>
          <Divider sx={{ my: 1.5 }} />
      
          <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Vehicles</Typography>
          {person.vehicles.map((vehicle) => (
            <Link href={`/vehicles/${vehicle.id}`} key={vehicle.id} passHref>
              <Chip label={vehicle.name} variant={"outlined"} sx={{ m: 0.5 }}/>
            </Link>
          ))}
        </>
      )}
      
      
      {!!person.species?.length && (
        <>
          <Divider sx={{ my: 1.5 }} />
      
          <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Vehicles</Typography>
          {person.species.map((specie) => (
            <Link href={`/species/${specie.id}`} key={specie.id} passHref>
              <Chip label={specie.name} variant={"outlined"} sx={{ m: 0.5 }}/>
            </Link>
          ))}
        </>
      )}
    </DetailCard>
  )
}

export default memo(Detail);