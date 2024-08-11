import React from "react";
import type { Metadata } from "next";

import Providers from "@/components/providers";
import "@/styles/globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: '%s | The Star Wars',
    default: 'The Star Wars', // a default is required when creating a template
  },
  description: "Explore the vast universe of Star Wars with detailed information and search-input functionality.",
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}