'use client';

import { memo, useEffect } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import DetailCard from "@/components/ui/cards/detail-card";
import VehiclesLoading from "@/components/vehicles/loading";
import AvatarList from "@/components/ui/avatar-list";
import { fetchVehicleDetail, getLoading, getVehicleDetail } from "@/store/features/details";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { formatNumber, toTitleCase } from "@/utils/helper";

interface VehicleDetailProps {
  vehicleId: string;
}

const Detail = ({ vehicleId }: VehicleDetailProps) => {
  const dispatch = useAppDispatch();

  const vehicle = useAppSelector(getVehicleDetail);
  const isLoading = useAppSelector(getLoading);

  useEffect(() => {
    dispatch(fetchVehicleDetail(vehicleId));
  }, [dispatch, vehicleId]);

  if(isLoading || !vehicle) {
    return <VehiclesLoading />
  }
  
  return (
    <DetailCard title={vehicle?.name || ''} sx={{ width: '100%', mb: 5 }}>
      <Stack spacing={4} direction={{ xs: "column", sm: 'row' }}>
        <Box position={"relative"} width={{ xs: '100%', sm: 420 }} height={320} sx={{ borderRadius: 3, overflow: 'hidden' }}>
          <Image src={vehicle.imageUrl} alt={vehicle.name} fill priority quality={100} />
        </Box>
        
        <Stack spacing={1} flex={1}>
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Model:</Typography>
            <Typography>{vehicle?.model}</Typography>
          </Box>
          
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Manufacturer:</Typography>
            <Typography>{vehicle?.manufacturer}</Typography>
          </Box>
          
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Class:</Typography>
            <Typography>{toTitleCase(vehicle?.vehicle_class)}</Typography>
          </Box>
          
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Cost:</Typography>
            <Typography>{vehicle?.cost_in_credits !== 'unknown' ? `${formatNumber(+vehicle?.cost_in_credits)} credits` : toTitleCase(vehicle?.cost_in_credits)}</Typography>
          </Box>
          
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Speed:</Typography>
            <Typography>{vehicle?.max_atmosphering_speed}km/h</Typography>
          </Box>
          
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Length:</Typography>
            <Typography>{vehicle?.length}m</Typography>
          </Box>
          
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Cargo Capacity:</Typography>
            <Typography>{formatNumber(+vehicle?.cargo_capacity)}kg</Typography>
          </Box>
          
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Minimum Crew:</Typography>
            <Typography>{vehicle?.crew}</Typography>
          </Box>
          
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Passengers</Typography>
            <Typography>{vehicle?.passengers}</Typography>
          </Box>
        </Stack>
      </Stack>
      
      {!!vehicle.films?.length && (
        <>
          <Divider sx={{ mt:3, mb: 2 }} />
          
          <AvatarList
            list={vehicle.films.map(item=>({
              id: item.id,
              name: item.title,
              imageUrl: item.imageUrl
            }))}
            href={"/films"}
            title={"Related Films"}
          />
        </>
      )}
      
      {!!vehicle.pilots?.length && (
        <>
          <Divider sx={{ my: 2 }} />
          
          <AvatarList
            list={vehicle.pilots}
            href={"/people"}
            title={"Related Pilots"}
          />
        </>
      )}
    </DetailCard>
  );

}

export default memo(Detail);