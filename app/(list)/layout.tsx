import React, { Suspense } from "react";
import Container from "@mui/material/Container";
import SearchInput from "@/components/ui/search-input";
import Box from "@mui/material/Box";
import Header from "@/components/ui/header";

const ListLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Header />
      
      <Container sx={{ mb: 5 }}>
        <Suspense>
          <Box sx={{ my: 5 }}>
            <SearchInput />
          </Box>
        </Suspense>
        
        {children}
      </Container>
    </main>
  )
}

export default ListLayout;