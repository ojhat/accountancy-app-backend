import { useState } from "react";
import { Box, InputAdornment, Popper } from "@mui/material";
import { BorderLessTextInput } from "../../theme/styledComponents";
import useSearchFetch from "../../hooks/useSearchFetch";
import SearchResults from "../SearchResults/SearchResults";
//Icons
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [anchorEl, setAnchorEl] = useState<any>(null);

  const { employees, loading } = useSearchFetch(searchTerm);
  return (
    <Box>
      <BorderLessTextInput
        fullWidth
        variant="outlined"
        placeholder="Search Teachers"
        value={searchTerm}
        onChange={(event) => {
          setAnchorEl(event.target);
          setSearchTerm(event.target.value);
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize="large" />
            </InputAdornment>
          ),
        }}
      />
      <Popper
        anchorEl={anchorEl}
        open={searchTerm.length > 0}
        placement="bottom-start"
        sx={{ width: "100%" }}
      >
        <SearchResults
          employees={employees}
          loading={loading}
          searchTerm={searchTerm}
        />
      </Popper>
    </Box>
  );
}

export default SearchBar;
