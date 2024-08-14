
import Link from "next/link";
import MuiCard, { CardProps as MuiCardProps } from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia, Typography } from "@mui/material";

interface CardProps extends MuiCardProps {
  href: string;
  imageUrl: string;
  label: string;
  description?: string;
}

const Card = ({ href, label, description, imageUrl, ...rest }: CardProps) => {
  return (
    <Link href={href}>
      <MuiCard {...rest}>
        <CardMedia
          sx={{ height: 400 }}
          image={imageUrl}
          title={label}
        />
        
        <CardContent>
          <Typography gutterBottom variant="h6" sx={{ margin: 0 }}>
            {label}
          </Typography>
          {!!description && (
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          )}
        </CardContent>
      </MuiCard>
    </Link>
  )
}

export default Card;