import { memo } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";
import Chip from "@mui/material/Chip";

import Card from "@/components/ui/card";
import { formatNumber, toTitleCase } from "@/utils/helper";

import { IStarshipDetail } from "@/types/starship";


interface StarshipDetailProps {
  starship: IStarshipDetail;
}

const Detail = ({ starship }: StarshipDetailProps) => {
  return (
    <Card title={starship.name} sx={{ width: '100%', mb: 5 }}>
      <Box display={"flex"} flexDirection={"column"} gap={0.5}>
        <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Model</Typography>
        <Typography>{starship.model}</Typography>
      </Box>
      
      <Divider sx={{ my: 1.5 }} />
      
      <Box display={"flex"} flexDirection={"column"} gap={0.5}>
        <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Manufacturer</Typography>
        <Typography>{starship.manufacturer}</Typography>
      </Box>
      
      <Divider sx={{ my: 1.5 }} />
      
      <Box display={"flex"} flexDirection={"column"} gap={0.5}>
        <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Hyperdrive Rating</Typography>
        <Rating name="read-only" value={+starship.hyperdrive_rating} readOnly />
      </Box>
      
      <Divider sx={{ my: 1.5 }} />
      
      <Box display={"flex"} flexDirection={"column"} gap={0.5}>
        <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Cost in Credits</Typography>
        <Typography>{formatNumber(+starship.cost_in_credits)} credits</Typography>
      </Box>
      
      <Divider sx={{ my: 1.5 }} />
      
      <Box display={"flex"} flexDirection={"column"} gap={0.5}>
        <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Length</Typography>
        <Typography>{starship.length}</Typography>
      </Box>
      
      <Divider sx={{ my: 1.5 }} />
      
      <Box display={"flex"} flexDirection={"column"} gap={0.5}>
        <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Max Atmosphering Speed</Typography>
        {starship?.max_atmosphering_speed?.toLowerCase() === 'n/a' ? (
          <Typography>
            &#8212;
          </Typography>
        ) : (
          <Typography>
            {starship?.max_atmosphering_speed} km/h
          </Typography>
        )}
      </Box>
      
      <Divider sx={{ my: 1.5 }} />
      
      <Box display={"flex"} flexDirection={"column"} gap={0.5}>
        <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Minimum Crew</Typography>
        <Typography>{starship.crew}</Typography>
      </Box>
      
      <Divider sx={{ my: 1.5 }} />
      
      <Box display={"flex"} flexDirection={"column"} gap={0.5}>
        <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Number of passengers</Typography>
        {starship?.passengers?.toLowerCase() === 'n/a' ? (
          <Typography>
            &#8212;
          </Typography>
        ) : (
          <Typography>
            {starship?.passengers}
          </Typography>
        )}
      </Box>
      
      <Divider sx={{ my: 1.5 }} />
      
      <Box display={"flex"} flexDirection={"column"} gap={0.5}>
        <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Cargo Capacity</Typography>
        <Typography>{formatNumber(+starship.cargo_capacity)} metric tons</Typography>
      </Box>
      
      <Divider sx={{ my: 1.5 }} />
      
      <Box display={"flex"} flexDirection={"column"} gap={0.5}>
        <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Consumables</Typography>
        <Typography>{starship.consumables}</Typography>
      </Box>
      
      <Divider sx={{ my: 1.5 }} />
      
      <Box display={"flex"} flexDirection={"column"} gap={0.5}>
        <Typography fontWeight={"bolder"} textTransform={"uppercase"}>MGLT</Typography>
        <Typography>{starship.MGLT}</Typography>
      </Box>
      
      <Divider sx={{ my: 1.5 }} />
      
      <Box display={"flex"} flexDirection={"column"} gap={0.5}>
        <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Starship Class</Typography>
        <Typography>{toTitleCase(starship.starship_class)}</Typography>
      </Box>
      
      {!!starship.pilots?.length && (
        <>
          <Divider sx={{ my: 1.5 }} />
          
          <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Pilots</Typography>
          {starship.pilots.map((pilot) => (
            <Link href={`/people/${pilot.id}`} key={pilot.id} passHref>
              <Chip label={pilot.name} variant={"outlined"} sx={{ m: 0.5 }}/>
            </Link>
          ))}
        </>
      )}
      
      {!!starship.films?.length && (
        <>
          <Divider sx={{ my: 1.5 }} />
          
          <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Films</Typography>
          {starship.films.map((film) => (
            <Link href={`/films/${film.id}`} key={film.id} passHref>
              <Chip label={film.title} variant={"outlined"} sx={{ m: 0.5 }}/>
            </Link>
          ))}
        </>
      )}
    </Card>
  );
}

export default memo(Detail);