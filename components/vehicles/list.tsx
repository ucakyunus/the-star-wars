'use client';

import { memo, useCallback, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useInView } from "react-intersection-observer";

import VehiclesItem from "@/components/vehicles/item";
import { getVehicles } from "@/services/vehicles";

import type { IVehicleCustom } from "@/types/vehicle";

interface VehiclesListProps {
  list: IVehicleCustom[];
  hasMore: boolean;
  query: string;
}

const List = ({ list, hasMore, query }: VehiclesListProps) => {
  const { ref, inView } = useInView();
  
  const [vehicles, setVehicles] = useState<IVehicleCustom[]>(list);
  const [pageNumber, setPageNumber] = useState<number>(2);
  const [hasNext, setHasNext] = useState<boolean>(hasMore);
  
  const loadMore = useCallback(async () => {
    if (hasNext) {
      const moreVehicles = await getVehicles({ page: +pageNumber, query })
      setVehicles([...vehicles, ...moreVehicles.results])
      setHasNext(moreVehicles.next !== null)
      setPageNumber((prev) => prev + 1);
    }
  }, [hasNext, pageNumber, query, vehicles])
  
  useEffect(() => {
    if (inView) {
      loadMore()
    }
  }, [inView, loadMore])
  
  return (
    <>
      <Typography variant="h4" gutterBottom sx={{ display: {xs: 'block', md: 'none' }}}>
        Vehicles
      </Typography>

      <Grid container spacing={2}>
        {vehicles.map((vehicle: IVehicleCustom) => (
          <VehiclesItem vehicle={vehicle} key={vehicle.name} />
        ))}
      </Grid>

      {hasNext && (
        <Box ref={ref} mt={2} textAlign="center">
          Loading...
        </Box>
      )}
    </>
  );
}

export default memo(List);