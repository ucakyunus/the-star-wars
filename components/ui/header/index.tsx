'use client';

import { memo, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from "@mui/material/Container";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import NavLink from "@/components/ui/header/nav-link";

const Drawer = dynamic(() => import('@/components/ui/header/drawer'));

const Header = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <header>
      <Box>
        <AppBar position="static" variant={"outlined"} color={"info"}>
          <Toolbar variant="regular">
            <Container>
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: { xs: '50%', md: 24 },
                  transform: { xs: 'translate(-50%, -50%)', md: 'translateY(-50%)' },
                  width: { xs: 60, md: 70 },
                  height: { xs: 60, md: 70 }
                }}
              >
                <Image src={"/images/star-wars-logo.png"} alt={"Star Wars"} priority quality={100} fill/>
              </Box>
            
              {/* for the mobile */}
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, display: { xs: "block", md: 'none' } }}
                onClick={() => setOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              
              {/* for the mobile */}
              <Drawer open={open} onClose={() => setOpen(false)} />
              
              <NavLink />

            </Container>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
}

export default memo(Header);
