'use client';

import { memo } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import Image from "next/image";
import { INavItem, navs } from "@/utils/constants";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" variant={"outlined"} color={"info"}>
          <Toolbar variant="regular">
            <Container>
              {/* not suitable for mobile */}
              <Box sx={{ position: 'absolute', left: 24, top: '50%', transform: 'translateY(-50%)', width: 70, height: 70 }}>
                <Image src={"/images/star-wars-logo.png"} alt={"Star Wars"} priority quality={100} fill/>
              </Box>
             
              {/* for the mobile */}
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, display: { xs: "block", md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              
              <Box
                sx={{
                  width: '100%',
                  display: { xs: 'none', md: 'flex' },
                  flexDirection: 'row',
                  justifyContent: 'center',
                  gap: 5
                }}
              >
                {Object.values(navs).map((nav: INavItem, index: number) => (
                  <Link key={index} href={nav.href} style={{ color: pathname === nav.href ? '#ffc107' : 'inherit' }}>
                    <Typography variant="h6" color="inherit" component="div">
                      {nav.title}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Container>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
}

export default memo(Header);
