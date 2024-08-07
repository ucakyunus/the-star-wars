'use client';

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {InputAdornment} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  
  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    
    replace(`${pathname}?${params.toString()}`);
  }
  
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Box
        sx={{
          width: 600,
          maxWidth: '100%',
        }}
      >
        <TextField
          fullWidth
          placeholder="Search..."
          id="fullWidth"
          onChange={(event)=> handleSearch(event.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          defaultValue={searchParams.get('query')?.toString() ?? ''}
        />
      </Box>
    </Box>
  );
}

export default SearchInput;