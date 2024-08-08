import { memo } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import Card from "@/components/ui/card";
import { navs } from "@/utils/constants";
import { toTitleCase } from "@/utils/helper";

import { ISpecieWithId} from "@/types/specie";

interface SpeciesItemProps {
  specie: ISpecieWithId
}

const Item = ({ specie }: SpeciesItemProps) => {
  return (
    <Grid key={specie.id} item xs={12} sm={6} lg={4}>
      <Card title={specie.name} href={`${navs.species.href}/${specie.id}`}>
        <Box display={"flex"} flexDirection={"column"} gap={0.5}>
          <Typography fontWeight={"bolder"}>Language</Typography>
          <Typography>{specie.language}</Typography>
        </Box>
        
        <Divider sx={{ my: 1 }}/>
        
        <Box display={"flex"} flexDirection={"column"} gap={0.5}>
          <Typography fontWeight={"bolder"}>Classification:</Typography>
          <Typography>{toTitleCase(specie.classification)}</Typography>
        </Box>
        
        <Divider sx={{ my: 1 }}/>
        
        <Box display={"flex"} flexDirection={"column"} gap={0.5}>
          <Typography fontWeight={"bolder"}>Average Height:</Typography>
          <Typography>{specie.average_height}</Typography>
        </Box>
      </Card>
    </Grid>
  )
};

export default memo(Item);