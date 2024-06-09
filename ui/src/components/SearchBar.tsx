import SearchIcon from "@mui/icons-material/Search";
import { InputWithIcon } from "./InputWithIcon";

type Props = {
  onSearch: () => void;
  onValueChange: (name: string) => void;
  value: string;
};

const SearchBar = ({ onSearch, onValueChange, value }: Props) => {
  return (
    <InputWithIcon
      onChange={() => onValueChange}
      value={value}
      placeholder="Search movies..."
      onClick={onSearch}
    >
      <SearchIcon />
    </InputWithIcon>
  );
};

export default SearchBar;
