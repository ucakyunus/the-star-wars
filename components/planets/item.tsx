import { memo } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

import ItemCard from "@/components/ui/cards/item-card";
import { formatNumber, toTitleCase } from "@/utils/helper";
import { navs } from "@/utils/constants";

import { IPlanetCustom } from "@/types/planet";

interface PlanetItemProps {
  planet: IPlanetCustom
}

const Item = ({ planet }: PlanetItemProps) => {
  return (
    <Grid item xs={6} sm={4} lg={3}>
      <ItemCard 
        label={planet.name}
        href={`${navs.planets.href}/${planet.id}`} 
        image={{
          url: planet.imageUrl,
          height: 275
        }}
      />
    </Grid>
  )
  
}

export default memo(Item);