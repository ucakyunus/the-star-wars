import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const SearchInput = () => {
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Box
        sx={{
          width: 600,
          maxWidth: '100%',
        }}
      >
        <TextField fullWidth placeholder="Search..." id="fullWidth" />
      </Box>
    </Box>
  );
}

export default SearchInput;