import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { InputWithIcon } from "./InputWithIcon";

type Props = {
  onSearch?: () => void;
  onValueChange: (name: string) => void;
  value: string;
};

const SearchBar = ({ onSearch, onValueChange, value }: Props) => {
  return (
    <Box>
      <InputWithIcon
        onChange={(e: any) => onValueChange(e)}
        value={value}
        placeholder="Search movies..."
        onClick={onSearch}
      >
        <SearchIcon />
      </InputWithIcon>
    </Box>
  );
};

export default SearchBar;
