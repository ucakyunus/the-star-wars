import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";

interface AvatarListProps {
  list: { id: string; name: string; imageUrl: string }[];
  href: string;
  title: string;
}

interface AvatarItemProps {
  item: { id: string; name: string; imageUrl: string };
  href: string;
}

const AvatarItem = ({ item, href }: AvatarItemProps) => (
  <Link href={`${href}/${item.id}`} key={item.id} passHref>
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems:'center', gap: 2 }}>
      <Avatar alt={item.name} src={item.imageUrl} sx={{ width: 72, height: 72, textAlign: 'center' }}>
        <Typography component={"span"} fontSize={12}>No Image</Typography>
      </Avatar>
      <Typography component={"span"} fontSize={14} textAlign="center" color={"#039BE5"}>{item.name}</Typography>
    </Box>
  </Link>
)

const AvatarList = ({ list, href, title }: AvatarListProps) => {
  return (
    <>
      <Typography fontWeight={"bolder"} textTransform={"uppercase"}>{title}</Typography>
      <Grid container spacing={2} mt={1.5}>
        {
          list.map((item) => (
            <Grid item xs={6} sm={3} md={2} lg={1.5} key={item.id}>
              <AvatarItem item={item} href={href} key={item.id} />
            </Grid>
          ))
        }
      </Grid>
    </>
  )
}

export default AvatarList;