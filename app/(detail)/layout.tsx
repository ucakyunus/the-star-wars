import React from "react";
import Container from "@mui/material/Container";
import BackButton from "@/components/ui/back-button";
import Box from "@mui/material/Box";

const DetailLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <main>
      <Box sx={{ backgroundColor: '#e3e3e3', height: '60px' }}>
        <Container sx={{ height:'100%', display: 'flex', alignItems: 'center' }}>
          <BackButton />
        </Container>
      </Box>
      
      <Container sx={{ mt: 5 }}>
        {children}
      </Container>
    </main>
  )
}

export default DetailLayout;