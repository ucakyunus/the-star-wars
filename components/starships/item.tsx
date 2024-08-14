import { memo } from "react";
import Grid from "@mui/material/Grid";

import ItemCard from "@/components/ui/cards/item-card";
import { navs } from "@/utils/constants";

import type { IStarshipCustom } from "@/types/starship";

interface StarshipItemProps {
  starship: IStarshipCustom;
}

const Item = ({ starship }: StarshipItemProps) => {
  return (
    <Grid item xs={6} sm={3} lg={2.4}>
      <ItemCard 
        label={starship.name} 
        href={`${navs.starships.href}/${starship.id}`} 
        image={{
          url: starship.imageUrl,
          height: 145
        }} 
      />
    </Grid>
  )
}

export default memo(Item);