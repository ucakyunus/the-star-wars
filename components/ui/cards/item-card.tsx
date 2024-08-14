
import Link from "next/link";
import MuiCard, { CardProps as MuiCardProps } from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia, Typography } from "@mui/material";
import { PLACEHOLDER_URL } from "@/utils/constants";

interface CardProps extends MuiCardProps {
  href: string;
  label: string;
  image: {
    url: string;
    height?: number;
  }
  description?: string;
}

const Card = ({ href, label, description, image, ...rest }: CardProps) => {
  return (
    <Link href={href}>
      <MuiCard {...rest} sx={{ height: '100%' }}>
        <CardMedia
          component="img"
          height={image?.height || 400}
          image={image?.url}
          title={label}
        />
        
        <CardContent>
          <Typography gutterBottom variant="h6" sx={{ margin: 0, color: '#ffc107' }}>
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