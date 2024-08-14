import Skeleton from "@mui/material/Skeleton";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import DetailCard from "@/components/ui/cards/detail-card";

const Loading = () => {
  return (
    <DetailCard title={'Loading...'} sx={{ width: '100%', mb: 5 }}>
      
      <Stack spacing={4} direction={{ xs: "column", sm: 'row' }}>
        <Box position={"relative"} width={{ xs: '100%', sm: 420 }} height={320} sx={{ borderRadius: 3, overflow: 'hidden' }}>
          <Skeleton variant="rectangular" width={'100%'} height={'100%'} />
        </Box>
        
        <Stack spacing={1} flex={1}>
          <Skeleton variant="rectangular" width={'60%'} height={24} />
          <Skeleton variant="rectangular" width={'60%'} height={24} />
          <Skeleton variant="rectangular" width={'60%'} height={24} />
          <Skeleton variant="rectangular" width={'60%'} height={24} />
          <Skeleton variant="rectangular" width={'60%'} height={24} />
          <Skeleton variant="rectangular" width={'60%'} height={24} />
          <Skeleton variant="rectangular" width={'60%'} height={24} />
          <Skeleton variant="rectangular" width={'60%'} height={24} />
          <Skeleton variant="rectangular" width={'60%'} height={24} />
        </Stack>
      </Stack>
      
      <Divider sx={{ mt:3, mb: 2 }} />
      
      <Skeleton variant="rectangular" width={'30%'} height={24} />
      <Grid container spacing={2} mt={1.5}>
        {Array(16).fill(1).map((_, index) => (
          <Grid item xs={6} sm={3} md={2} lg={1.5} key={index}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems:'center', gap: 2 }}>
              <Skeleton variant="circular" width={72} height={72} />
              <Skeleton variant="text" width={'60%'} height={20} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </DetailCard>
  )
}

export default Loading;