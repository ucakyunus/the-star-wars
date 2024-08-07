
import Link from "next/link";
import MuiCard, { CardProps as MuiCardProps } from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from "@mui/material/Button";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface CardProps extends MuiCardProps {
  title: string;
  hideActions?: boolean
  href?: string;
  children: React.ReactNode;
}

const Card = ({ title, hideActions = false, href, children, ...rest }: CardProps) => {
  return (
    <MuiCard {...rest}>
      <CardHeader title={title.toUpperCase()} sx={{ color: '#ffc107', textAlign: 'center' }}/>
      
      <CardContent>
        {children}
      </CardContent>
      
      {!hideActions && href && (
        <CardActions disableSpacing sx={{ justifyContent: 'flex-end' }}>
          <Link href={href} passHref>
            <Button color={"info"} sx={{ marginLeft: 'auto', textTransform: 'inherit' }} endIcon={<ArrowForwardIcon />}>
              Detail
            </Button>
          </Link>
        </CardActions>
      )}
    </MuiCard>
  )
}

export default Card;