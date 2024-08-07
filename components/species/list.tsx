import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Card from "@/components/ui/card";

import { navs } from "@/utils/constants";

import { ISpecieWithId } from "@/types/specie";

interface SpeciesListProps {
  list: ISpecieWithId[];
}

const SpeciesList = ({ list }: SpeciesListProps) => {
  return (
    <Grid container spacing={2}>
      {list.map((specie: ISpecieWithId) => (
        <Grid key={specie.id} item xs={12} sm={6} lg={4}>
          <Card title={specie.name} href={`${navs.species.href}/${specie.id}`}>
            <Box display={"flex"} flexDirection={"column"} gap={0.5}>
              <Typography fontWeight={"bolder"}>Language</Typography>
              <Typography>{specie.language}</Typography>
            </Box>
            
            <Divider sx={{ my: 1 }}/>
            
            <Box display={"flex"} flexDirection={"column"} gap={0.5}>
              <Typography fontWeight={"bolder"}>Classification:</Typography>
              <Typography>{specie.classification}</Typography>
            </Box>
            
            <Divider sx={{ my: 1 }}/>
            
            <Box display={"flex"} flexDirection={"column"} gap={0.5}>
              <Typography fontWeight={"bolder"}>Average Height:</Typography>
              <Typography>{specie.average_height}</Typography>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default SpeciesList;