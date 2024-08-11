'use client';

import { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import Card from "@/components/ui/card";
import { fetchVehicleDetail, getVehicleDetail } from "@/redux/features/details";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toTitleCase } from "@/utils/helper";
import { Skeleton } from "@mui/material";

interface VehicleDetailProps {
  vehicleId: string;
}

const VehicleDetail = ({ vehicleId }: VehicleDetailProps) => {
  const dispatch = useAppDispatch();

  const vehicle = useAppSelector(getVehicleDetail);

  const isLoading = useAppSelector((state) => state.details.pending);

  useEffect(() => {
    dispatch(fetchVehicleDetail(vehicleId));
  }, [dispatch, vehicleId]);

  if(isLoading || !vehicle) {
    return (
      <Card title={'Loading...'} sx={{ width: '100%', mb: 5 }}>
        <Skeleton variant="rectangular" width={'100%'} height={52} />
        <Divider sx={{ my: 1.5 }} />
        <Skeleton variant="rectangular" width={'100%'} height={52} />
        <Divider sx={{ my: 1.5 }} />
        <Skeleton variant="rectangular" width={'100%'} height={52} />
        <Divider sx={{ my: 1.5 }} />
        <Skeleton variant="rectangular" width={'100%'} height={52} />
      </Card>
    )
  }

  return (
    <Card title={vehicle?.name || ''} sx={{ width: '100%', mb: 5 }}>
      <Box display={"flex"} flexDirection={"column"} gap={0.5}>
        <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Crew</Typography>
        <Typography>{vehicle?.crew}</Typography>
      </Box>

      <Divider sx={{ my: 1.5 }} />

      <Box display={"flex"} flexDirection={"column"} gap={0.5}>
        <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Model</Typography>
        <Typography>{vehicle?.model}</Typography>
      </Box>

      <Divider sx={{ my: 1.5 }} />

      <Box display={"flex"} flexDirection={"column"} gap={0.5}>
        <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Passengers</Typography>
        <Typography>{vehicle?.passengers}</Typography>
      </Box>

      <Divider sx={{ my: 1.5 }} />

      <Box display={"flex"} flexDirection={"column"} gap={0.5}>
        <Typography fontWeight={"bolder"} textTransform={"uppercase"}>Vehicle Class</Typography>
        <Typography>{toTitleCase(vehicle?.vehicle_class || '')}</Typography>
      </Box>
    </Card>
  );

}

export default VehicleDetail;