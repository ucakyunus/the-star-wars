import { memo } from "react";
import Grid from "@mui/material/Grid";

import ItemCard from "@/components/ui/cards/item-card";
import { navs } from "@/utils/constants";

import type { IVehicleCustom } from "@/types/vehicle";

interface VehiclesItemProps {
  vehicle: IVehicleCustom
}

const VehiclesItem = ({ vehicle }: VehiclesItemProps) => {
  return (
    <Grid item xs={6} sm={4} lg={2.4}>
      <ItemCard 
        label={vehicle.name} 
        href={`${navs.vehicles.href}/${vehicle.id}`} 
        image={{
          url: vehicle.imageUrl,
          height: 145
        }}
      />
    </Grid>
  )
}

export default memo(VehiclesItem);