import { memo } from "react";
import Grid from "@mui/material/Grid";

import ItemCard from "@/components/ui/cards/item-card";
import { navs } from "@/utils/constants";

import type { ISpecieCustom} from "@/types/specie";

interface SpeciesItemProps {
  specie: ISpecieCustom
}

const Item = ({ specie }: SpeciesItemProps) => {
  return (
    <Grid item xs={6} sm={4} lg={3}>
      <ItemCard
        label={specie.name}
        href={`${navs.species.href}/${specie.id}`}
        image={{
          url: specie.imageUrl,
        }} 
      />
    </Grid>
  )
};

export default memo(Item);