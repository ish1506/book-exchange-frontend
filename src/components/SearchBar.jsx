import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { PropTypes } from "prop-types";
import { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTitle, setSearchTitle] = useState("");

  return (
    <Box pt={4} pl={8} pr={8}>
      <InputGroup>
        <Input
          placeholder="Search for books (by title)"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch(searchTitle);
            }
          }}
        />
        <InputRightElement>
          <IconButton
            aria-label="Search books"
            icon={<SearchIcon />}
            onClick={() => onSearch(searchTitle)}
          />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
