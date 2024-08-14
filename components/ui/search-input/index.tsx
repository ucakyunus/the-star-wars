'use client';

import { memo, useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';

import { debounce } from "@/utils/helper";

const debouncedHandleSearch = debounce((
  event: React.ChangeEvent<HTMLInputElement>, 
  searchParams: URLSearchParams, 
  pathname: string, 
  replace: (url: string) => void
) => {
  const term = event.target.value;
  const params = new URLSearchParams(searchParams);

  if (term) {
    params.set('query', term);
  } else {
    params.delete('query');
  }
  
  replace(`${pathname}?${params.toString()}`);
}, 700);

const SearchInput = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  
  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      debouncedHandleSearch(event, searchParams, pathname, replace);
    },
    [pathname, replace, searchParams]
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