import { memo } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

import Card from "@/components/ui/card";
import { formatNumber, toTitleCase } from "@/utils/helper";
import { navs } from "@/utils/constants";

import { IPlanetWithId } from "@/types/planet";

interface PlanetItemProps {
  planet: IPlanetWithId
}

const Item = ({ planet }: PlanetItemProps) => {
  return (
    <Grid key={planet.name} item xs={12} sm={6} lg={4}>
      <Card title={planet.name} href={`${navs.planets.href}/${planet.id}`}>
        
        <Box display={"flex"} flexDirection={"column"} gap={0.5}>
          <Typography fontWeight={"bolder"}>Terrain</Typography>
          <Typography>{toTitleCase(planet.terrain)}</Typography>
        </Box>
        
        <Divider sx={{ my: 1 }}/>
        
        <Box display={"flex"} flexDirection={"column"} gap={0.5}>
          <Typography fontWeight={"bolder"}>Climate</Typography>
          <Typography>{toTitleCase(planet.climate)}</Typography>
        </Box>
        
        <Divider sx={{ my: 1 }}/>
        
        <Box display={"flex"} flexDirection={"column"} gap={0.5}>
          <Typography fontWeight={"bolder"}>Gravity</Typography>
          <Typography>{planet.gravity}</Typography>
        </Box>
        
        <Divider sx={{ my: 1 }} />
        
        <Box display={"flex"} flexDirection={"column"} gap={0.5}>
          <Typography fontWeight={"bolder"}>Population</Typography>
          <Typography>{planet.population !== 'unknown' ? formatNumber(+planet.population) : 'unknown'}</Typography>
        </Box>
      </Card>
    </Grid>
  )
  
}

export default memo(Item);