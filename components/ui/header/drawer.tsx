'use client';

import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from  '@mui/material/List';
import ListItem from  '@mui/material/ListItem';
import ListItemButton from  '@mui/material/ListItemButton';
import ListItemText from  '@mui/material/ListItemText';
import Divider from "@mui/material/Divider";

import { navs } from "@/utils/constants";

interface DrawerProps {
	open: boolean;
  onClose: () => void;
}

const Drawer = ({ open, onClose }: DrawerProps) => {
	const pathname = usePathname();

	return (
		<MuiDrawer open={open} role="presentation" onClose={() => onClose()}>
			<Box display={"flex"} justifyContent={"center"} mt={1}>
				<Image src={"/images/star-wars-logo.png"} alt={"Star Wars"} quality={100} width={150} height={80} />
			</Box>
		
			<List sx={{ width: 250 }}>
				{Object.values(navs).map((nav, index) => (
					<Box key={nav.href}>
						<ListItem disablePadding>
							<Link href={nav.href} passHref>
								<ListItemButton onClick={()=> onClose()}>
									<ListItemText primary={nav.title} sx={{ color: pathname === nav.href ? '#ffc107' : 'inherit' }} />
								</ListItemButton>
							</Link>
						</ListItem>
						<Divider />
					</Box>
				))}
			</List>
		</MuiDrawer>
	)
}

export default memo(Drawer);