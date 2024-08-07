import React from "react";
import Container from "@mui/material/Container";
import BackButton from "@/components/ui/back-button";

const DetailLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <main>
      <Container>
        <BackButton />
        {children}
      </Container>
    </main>
  )
}

export default DetailLayout;