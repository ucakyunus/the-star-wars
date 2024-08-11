import { memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { INavItem, navs } from "@/utils/constants";

const NavLink  = () => {
	const pathname = usePathname();

  return (
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
	)
}

export default memo(NavLink);