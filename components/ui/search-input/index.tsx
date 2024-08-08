'use client';

import { memo, useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';

import debounce from "@mui/utils/debounce";

const SearchInput = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  
  const handleSearch = useCallback(
    debounce((event: React.ChangeEvent<HTMLInputElement>) => {
      const term = event.target.value;
      const params = new URLSearchParams(searchParams);
      if (term) {
        params.set('query', term);
      } else {
        params.delete('query');
      }
      
      replace(`${pathname}?${params.toString()}`);
    }, 500),
    []
  );
  
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Box
        sx={{ width: 600, maxWidth: '100%' }}
      >
        <TextField
          fullWidth
          placeholder="Search..."
          id="fullWidth"
          onChange={handleSearch}
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

export default memo(SearchInput);