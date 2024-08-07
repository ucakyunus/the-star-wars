import Grid from "@mui/material/Grid";
import Card from "@/components/ui/card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { navs } from "@/utils/constants";
import { toTitleCase } from "@/utils/helper";
import { IVehicleWithId } from "@/types/vehicle";

interface VehiclesListProps {
  list: IVehicleWithId[];
}

const VehiclesList = ({ list }: VehiclesListProps) => {
  return (
    <Grid container spacing={2}>
      {list.map((vehicle: IVehicleWithId) => (
        <Grid key={vehicle.id} item xs={12} sm={6} lg={4}>
          <Card title={vehicle.name} href={`${navs.vehicles.href}/${vehicle.id}`}>
            <Box display={"flex"} flexDirection={"column"} gap={0.5}>
              <Typography fontWeight={"bolder"}>Model</Typography>
              <Typography>{vehicle.model}</Typography>
            </Box>
            
            <Divider sx={{ my: 1 }} />
            
            <Box display={"flex"} flexDirection={"column"} gap={0.5}>
              <Typography fontWeight={"bolder"}>Manufacturer</Typography>
              <Typography>{vehicle.manufacturer}</Typography>
            </Box>
            
            <Divider sx={{ my: 1 }} />
            
            <Box display={"flex"} flexDirection={"column"} gap={0.5}>
              <Typography fontWeight={"bolder"}>Length</Typography>
              <Typography>{vehicle.length}</Typography>
            </Box>
            
            <Divider sx={{ my: 1 }} />
            
            <Box display={"flex"} flexDirection={"column"} gap={0.5}>
              <Typography fontWeight={"bolder"}>Vehicle Class</Typography>
              <Typography>{toTitleCase(vehicle.vehicle_class)}</Typography>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default VehiclesList;