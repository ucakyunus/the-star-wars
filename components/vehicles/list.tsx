'use client';

import { memo, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useInView } from "react-intersection-observer";

import VehiclesItem from "@/components/vehicles/item";
import { getVehicles } from "@/services/vehicles";

import { IVehicleWithId } from "@/types/vehicle";

interface VehiclesListProps {
  list: IVehicleWithId[];
  hasMore: boolean;
  query: string;
}

const VehiclesList = ({ list, hasMore, query }: VehiclesListProps) => {
  const { ref, inView } = useInView();
  
  const [vehicles, setVehicles] = useState<IVehicleWithId[]>(list);
  const [pageNumber, setPageNumber] = useState<number>(2);
  const [hasNext, setHasNext] = useState<boolean>(hasMore);
  
  const loadMore = async () => {
    if (hasNext) {
      const moreVehicles = await getVehicles({ page: +pageNumber, query })
      setVehicles([...vehicles, ...moreVehicles.results])
      setHasNext(moreVehicles.next !== null)
      setPageNumber((prev) => prev + 1);
    }
  }
  
  useEffect(() => {
    if (inView) {
      loadMore()
    }
  }, [inView])
  
  return (
    <Grid container spacing={2}>
      {vehicles.map((vehicle: IVehicleWithId) => (
        <VehiclesItem vehicle={vehicle} key={vehicle.id} />
      ))}
      
      {hasNext && (
        <Box ref={ref} mt={2}>
          Loading...
        </Box>
      )}
    </Grid>
  );
}

export default memo(VehiclesList);