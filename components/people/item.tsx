import { memo } from "react";
import Grid from "@mui/material/Grid";

import ItemCard from "@/components/ui/cards/item-card";
import { navs } from "@/utils/constants";

import { IPersonCustom } from "@/types/people";

interface PeopleItemProps {
  person: IPersonCustom
}

const Item = ({ person }: PeopleItemProps) => {
  return (
    <Grid item xs={6} sm={4} lg={3}>
      <ItemCard 
        label={person.name} 
        href={`${navs.people.href}/${person.id}`} 
        image={{ url: person.imageUrl }}
      />
    </Grid>
  )
}

export default memo(Item);