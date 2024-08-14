import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import DetailCard from "@/components/ui/cards/detail-card";
import AvatarList from "@/components/ui/avatar-list";
import { toTitleCase } from "@/utils/helper";

import type { IPersonDetail } from "@/types/people";

interface PeopleDetailProps {
  person: IPersonDetail;
}

const Detail = ({ person }: PeopleDetailProps) => {
  return (
    <DetailCard title={person.name} sx={{ width: '100%', mb: 5 }}>
      <Stack spacing={4} direction={{ xs: "column", sm: 'row' }}>
        <Box position={"relative"} width={{ xs: '100%', sm: 260 }} height={350} sx={{ borderRadius: 3, overflow: 'hidden' }}>
          <Image src={person.imageUrl} alt={person.name} fill priority quality={100} />
        </Box>
        
        <Stack spacing={1} flex={1}>
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Birth Year:</Typography>
            <Typography>{person.birth_year}</Typography>
          </Box>
          
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Species:</Typography>
            <Typography>
              {!!person.species?.length ? person.species.map((specie) => (
                <Link href={`/species/${specie.id}`} key={specie.id}>
                  <Typography component={"span"} color="primary">{specie.name}</Typography>
                </Link>
              )): 'Unkonwn'}
            </Typography>
          </Box>
          
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Height:</Typography>
            <Typography>{person.height} cm</Typography>
          </Box>
          
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Mass:</Typography>
            <Typography>{person.mass} kg</Typography>
          </Box>
          
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Gender:</Typography>
            <Typography>{toTitleCase(person.gender)}</Typography>
          </Box>
          
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Hair Color:</Typography>
            <Typography>{toTitleCase(person.hair_color)}</Typography>
          </Box>
          
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Skin Color:</Typography>
            {person?.skin_color?.toLowerCase() === 'unknown' ? (
              <Typography>
                &#8212;
              </Typography>
            ) : (
              <Typography>{toTitleCase(person.skin_color)}</Typography>
            )}
          </Box>
          
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Eye Color:</Typography>
            <Typography>{toTitleCase(person.eye_color)}</Typography>
          </Box>
          
          <Box display={"flex"} gap={0.5}>
            <Typography fontWeight={"bolder"}>Homeworld:</Typography>
            <Typography>
              <Link href={`/planets/${person.homeworld.id}`}>
                <Typography component={"span"} color={'#039BE5'}>{person.homeworld.name}</Typography>
              </Link>
            </Typography>
          </Box>
        </Stack>
      </Stack>
      
      {!!person.films?.length && (
        <>
          <Divider sx={{ mt:3, mb: 2 }} />
          
          <AvatarList
            list={person.films.map(item=>({
              id: item.id,
              name: item.title,
              imageUrl: item.imageUrl
            }))}
            href={"/films"}
            title={"Related Films"}
          />
        </>
      )}
      
      {!!person.starships?.length && (
        <>
          <Divider sx={{ my: 2 }} />
          
          <AvatarList list={person.starships} href={'/starships'} title={"Related Starships"} />
        </>
      )}
      
      {!!person.vehicles?.length && (
        <>
          <Divider sx={{ my: 2 }} />
          
          <AvatarList list={person.vehicles} href={'/vehicles'} title={"Related Vehicles"} />
        </>
      )}
    </DetailCard>
  )
}

export default memo(Detail);