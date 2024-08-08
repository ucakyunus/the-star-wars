'use client';

import { memo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from  '@mui/material/List';
import ListItem from  '@mui/material/ListItem';
import ListItemButton from  '@mui/material/ListItemButton';
import ListItemText from  '@mui/material/ListItemText';
import Divider from "@mui/material/Divider";

import { INavItem, navs } from "@/utils/constants";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  
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
              <Drawer open={open} role="presentation" onClose={() => setOpen(false)}>
                <Box display={"flex"} justifyContent={"center"} mt={1}>
                  <Image src={"/images/star-wars-logo.png"} alt={"Star Wars"} quality={100} width={150} height={80} />
                </Box>
              
                <List sx={{ width: 250 }}>
                  {Object.values(navs).map((nav, index) => (
                    <>
                      <ListItem key={nav.href} disablePadding>
                        <Link href={nav.href} passHref>
                          <ListItemButton
                            onClick={() => {
                              setOpen(false)
                            }}
                          >
                            <ListItemText primary={nav.title} sx={{ color: pathname === nav.href ? '#ffc107' : 'inherit' }} />
                          </ListItemButton>
                        </Link>
                      </ListItem>
                      <Divider />
                    </>
                  ))}
                </List>
              </Drawer>
              
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
