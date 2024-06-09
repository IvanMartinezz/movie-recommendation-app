import { useState } from "react";
import Image from "next/image";
import Bar from "./Bar";
import SearchBar from "./SearchBar";

const Header = () => {
  const [name, setName] = useState<string>("");
  const get = () => {};

  return (
    <Bar>
      <Image width="50" height="50" alt="Logo" src="/logo.png" />
      <SearchBar
        onSearch={get}
        onValueChange={(newName) => setName(newName)}
        value={name}
      />
    </Bar>
  );
};

export default Header;
