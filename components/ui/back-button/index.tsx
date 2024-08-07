'use client';

import {useRouter} from "next/navigation";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from "@mui/material/IconButton";

const BackButton = () => {
  const router = useRouter();
  
  return (
    <IconButton color="secondary" aria-label="go back" size={"large"} onClick={() => router.back()}>
      <ArrowBackIcon />
    </IconButton>
  )
}

export default BackButton;