import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Card from "@/components/ui/card";
import { formatNumber, toTitleCase } from "@/utils/helper";
import { IPlanet } from "@/types/planet";

interface PlanetListProps {
  list: IPlanet[];
}

const PlanetsList = ({ list }: PlanetListProps) => {
  return (
    <Grid container spacing={2}>
      {list.map((planet: IPlanet) => (
        <Grid key={planet.name} item xs={12} sm={6} lg={4}>
          <Card title={planet.name} hideActions>
            
            <Box display={"flex"} flexDirection={"column"} gap={0.5}>
              <Typography fontWeight={"bolder"}>Terrain</Typography>
              <Typography>{toTitleCase(planet.terrain)}</Typography>
            </Box>
            
            <Divider sx={{ my: 1 }}/>
            
            <Box display={"flex"} flexDirection={"column"} gap={0.5}>
              <Typography fontWeight={"bolder"}>Climate</Typography>
              <Typography>{toTitleCase(planet.climate)}</Typography>
            </Box>
            
            <Divider sx={{ my: 1 }}/>
            
            <Box display={"flex"} flexDirection={"column"} gap={0.5}>
              <Typography fontWeight={"bolder"}>Gravity</Typography>
              <Typography>{planet.gravity}</Typography>
            </Box>
            
            <Divider sx={{ my: 1 }} />
            
            <Box display={"flex"} flexDirection={"column"} gap={0.5}>
              <Typography fontWeight={"bolder"}>Population</Typography>
              <Typography>{planet.population !== 'unknown' ? formatNumber(+planet.population) : 'unknown'}</Typography>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default PlanetsList;