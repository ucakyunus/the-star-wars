import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import dynamic from "next/dynamic";

import theme from "@/theme";

const StoreProvider = dynamic(() => import("@/components/providers/store-provider"));

interface ProvidersProps {
	children: React.ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
	return (
		<AppRouterCacheProvider>
			<ThemeProvider theme={theme}>
				<StoreProvider>
					{children}
				</StoreProvider>
			</ThemeProvider>
		</AppRouterCacheProvider>
	)
};

export default Providers;