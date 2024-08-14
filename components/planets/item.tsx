import { memo } from "react";
import Grid from "@mui/material/Grid";

import ItemCard from "@/components/ui/cards/item-card";
import { navs } from "@/utils/constants";

import type { IPlanetCustom } from "@/types/planet";

interface PlanetItemProps {
  planet: IPlanetCustom
}

const Item = ({ planet }: PlanetItemProps) => {
  return (
    <Grid item xs={12} sm={4} lg={3}>
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