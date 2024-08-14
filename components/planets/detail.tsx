import { memo } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import DetailCard from "@/components/ui/cards/detail-card";
import AvatarList from "@/components/ui/avatar-list";
import { formatNumber, toTitleCase } from "@/utils/helper";

import type { IPlanetDetail } from "@/types/planet";

interface PlanetsDetailProps {
  planet: IPlanetDetail;
}

const Detail = ({ planet }: PlanetsDetailProps) => {
  return (
    <DetailCard title={planet.name} sx={{ width: '100%', mb: 5 }}>
      <Stack spacing={4} direction={{ xs: "column", sm: 'row' }}>
        <Box position={"relative"} width={{ xs: '100%', sm: 350 }} height={350} sx={{ borderRadius: 3, overflow: 'hidden' }}>
          <Image src={planet.imageUrl} alt={planet.name} fill priority quality={100} />
        </Box>
        
        
        <Stack spacing={2} flex={1}>
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Population:</Typography>
            <Typography>{formatNumber(+planet.population)}</Typography>
          </Box>
          
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Rotation Period:</Typography>
            <Typography>{planet.rotation_period} days</Typography>
          </Box>
          
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Orbital Period:</Typography>
            <Typography>{planet.orbital_period} days</Typography>
          </Box>
          
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Diameter:</Typography>
            <Typography>{formatNumber(+planet.diameter)} km</Typography>
          </Box>
          
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Gravity:</Typography>
            <Typography>{planet.gravity}</Typography>
          </Box>
          
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Terrain:</Typography>
            <Typography>{toTitleCase(planet.terrain)}</Typography>
          </Box>
          
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Surface Water:</Typography>
            <Typography>{planet.surface_water}%</Typography>
          </Box>
          
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Climate:</Typography>
            <Typography>{toTitleCase(planet.climate)}</Typography>
          </Box>
        </Stack>
      </Stack>
      
      {!!planet.films?.length && (
        <>
          <Divider sx={{ my: 2 }} />
          
          <AvatarList
            list={planet.films.map(item=>({
              id: item.id,
              name: item.title,
              imageUrl: item.imageUrl
            }))}
            href={'/films'}
            title={"Related Films"}
          />
        </>
      )}
      
      {!!planet.residents?.length && (
        <>
          <Divider sx={{ my: 2 }} />
          
          <AvatarList
            list={planet.residents}
            href={'/people'}
            title={"Residents"}
          />
        </>
      )}
    </DetailCard>
  )
}

export default memo(Detail);