import { memo } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import Card from "@/components/ui/card";
import { navs } from "@/utils/constants";
import { toTitleCase } from "@/utils/helper";

import { IPersonWithId } from "@/types/people";

interface PeopleItemProps {
  person: IPersonWithId
}

const Item = ({ person }: PeopleItemProps) => {
  return (
    <Grid key={person.id} item xs={12} sm={6} lg={4}>
      <Card title={person.name} href={`${navs.people.href}/${person.id}`}>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Typography fontWeight={"bolder"}>Birth Year</Typography>
          <Typography>{person.birth_year}</Typography>
        </Box>
        
        <Divider sx={{ my: 1 }}/>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Typography fontWeight={"bolder"}>Height:</Typography>
          <Typography>{person.height} cm</Typography>
        </Box>
        
        <Divider sx={{ my: 1 }}/>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Typography fontWeight={"bolder"}>Mass:</Typography>
          <Typography>{person.mass} kg</Typography>
        </Box>
        
        <Divider sx={{ my: 1 }}/>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Typography fontWeight={"bolder"}>Gender:</Typography>
          <Typography>{toTitleCase(person.gender)}</Typography>
        </Box>
        
        <Divider sx={{ my: 1 }}/>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Typography fontWeight={"bolder"}>Hair Color:</Typography>
          <Typography>{toTitleCase(person.hair_color)}</Typography>
        </Box>
        
        <Divider sx={{ my: 1 }}/>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Typography fontWeight={"bolder"}>Skin Color:</Typography>
          <Typography>{toTitleCase(person.skin_color)}</Typography>
        </Box>
        
        <Divider sx={{ my: 1 }}/>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Typography fontWeight={"bolder"}>Eye Color:</Typography>
          <Typography>{toTitleCase(person.eye_color)}</Typography>
        </Box>
      </Card>
    </Grid>
  )
}

export default memo(Item);