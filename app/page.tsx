import {Button, Container, Typography} from "@mui/material";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <Container>
      <Typography className={styles.typography}>falan filan</Typography>
      <Button variant="contained" color="primary">Hello World</Button>
    </Container>
  );
}
