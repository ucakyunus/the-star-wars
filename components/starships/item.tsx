import { memo } from "react";
import Card from "@/components/ui/card";
import {navs} from "@/utils/constants";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {toTitleCase} from "@/utils/helper";
import Rating from "@mui/material/Rating";
import Grid from "@mui/material/Grid";
import {IStarshipWithId} from "@/types/starship";

interface StarshipItemProps {
  starship: IStarshipWithId;
}

const Item = ({ starship }: StarshipItemProps) => {
  return (
    <Grid key={starship.id} item xs={12} sm={6} lg={4}>
      <Card title={starship.name} href={`${navs.starships.href}/${starship.id}`}>
        <Box display={"flex"} flexDirection={"column"} gap={0.5}>
          <Typography fontWeight={"bolder"}>Model</Typography>
          <Typography>{starship.model}</Typography>
        </Box>
        
        <Divider sx={{ my: 1 }} />
        
        <Box display={"flex"} flexDirection={"column"} gap={0.5}>
          <Typography fontWeight={"bolder"}>Manufacturer</Typography>
          <Typography>{starship.manufacturer}</Typography>
        </Box>
        
        <Divider sx={{ my: 1 }} />
        
        <Box display={"flex"} flexDirection={"column"} gap={0.5}>
          <Typography fontWeight={"bolder"}>Starship Class</Typography>
          <Typography>{toTitleCase(starship.starship_class)}</Typography>
        </Box>
        
        <Divider sx={{ my: 1 }} />
        
        <Box display={"flex"} flexDirection={"column"} gap={0.5}>
          <Typography fontWeight={"bolder"}>Hyperdrive Rating</Typography>
          <Rating name="read-only" value={+starship.hyperdrive_rating} readOnly />
        </Box>
      </Card>
    </Grid>
  )
}

export default memo(Item);