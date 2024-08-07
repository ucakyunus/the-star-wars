import React from "react";
import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Star Wars",
  description: "Explore the vast universe of Star Wars with detailed information and search-input functionality.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)  => {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

export default RootLayout;
