import { memo } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";

import DetailCard from "@/components/ui/cards/detail-card";
import AvatarList from "@/components/ui/avatar-list";
import { formatNumber, toTitleCase } from "@/utils/helper";

import type { IStarshipDetail } from "@/types/starship";

interface StarshipDetailProps {
  starship: IStarshipDetail;
}

const Detail = ({ starship }: StarshipDetailProps) => {
  return (
    <DetailCard title={starship.name} sx={{ width: '100%', mb: 5 }}>
      <Stack spacing={4} direction={{ xs: "column", sm: 'row' }}>
        
        <Box position={"relative"} width={{ xs: '100%', sm: 400 }} height={400} sx={{ borderRadius: 3, overflow: 'hidden' }}>
          <Image src={starship.imageUrl} alt={starship.name} fill priority quality={100} />
        </Box>
        
        <Stack spacing={1} flex={1}>
        
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Model:</Typography>
            <Typography>{starship.model}</Typography>
          </Box>
          
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Manufacturer:</Typography>
            <Typography>{starship.manufacturer}</Typography>
          </Box>
          
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Class:</Typography>
            <Typography>{toTitleCase(starship.starship_class)}</Typography>
          </Box>
          
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Cost:</Typography>
            <Typography>{formatNumber(+starship.cost_in_credits)} credits</Typography>
          </Box>
          
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Speed:</Typography>
            <Typography>{`${starship?.max_atmosphering_speed} ${starship?.max_atmosphering_speed === 'n/a' ? '' : 'km/h'}`}</Typography>
          </Box>
          
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Hyperdrive Rating:</Typography>
            <Rating name="read-only" value={+starship.hyperdrive_rating} readOnly />
          </Box>
          
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>MGLT:</Typography>
            <Typography>{starship.MGLT}</Typography>
          </Box>
          
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Length:</Typography>
            <Typography>{formatNumber(+starship.length)}m</Typography>
          </Box>
          
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Cargo Capacity:</Typography>
            <Typography>{formatNumber(+starship.cargo_capacity)} metric tons</Typography>
          </Box>
          
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Minimum Crew:</Typography>
            <Typography>{starship.crew}</Typography>
          </Box>
          
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Passengers:</Typography>
            <Typography>
              {starship?.passengers}
            </Typography>
          </Box>
          
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Consumables:</Typography>
            <Typography>{starship.consumables}</Typography>
          </Box>
        </Stack>
      </Stack>
      
      {!!starship.films?.length && (
        <>
          <Divider sx={{ mt:3, mb: 2 }} />
          
          <AvatarList
            list={starship.films.map(item=>({
              id: item.id,
              name: item.title,
              imageUrl: item.imageUrl
            }))}
            href={"/films"}
            title={"Related Films"}
          />
        </>
      )}
      
      {!!starship.pilots?.length && (
        <>
          <Divider sx={{ mt:3, mb: 2 }} />
          
          <AvatarList
            list={starship.pilots}
            href={"/people"}
            title={"Related Pilots"}
          />
        </>
      )}
    </DetailCard>
  );
}

export default memo(Detail);