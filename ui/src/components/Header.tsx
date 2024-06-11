import React, { FC } from "react";
import Image from "next/image";
import Bar from "./Bar";
import SearchBar from "./SearchBar";

interface HeaderProps {
  logoOnClick?: React.MouseEventHandler<HTMLImageElement>;
  logoSrc?: string;
  logoWidth?: number;
  logoHeight?: number;
  showSearchBar: boolean;
  searchBarValue?: string;
  onSearchBarValueChange?: (value: string) => void;
  children?: React.ReactNode;
}

const Header: FC<HeaderProps> = ({
  logoOnClick,
  logoSrc = "/logo.png",
  logoWidth = 40,
  logoHeight = 40,
  showSearchBar,
  searchBarValue = "",
  onSearchBarValueChange,
  children,
}) => {
  const handleValueChange = (value: string) => {
    if (onSearchBarValueChange) {
      onSearchBarValueChange(value);
    }
  };

  return (
    <Bar>
      <Image
        width={logoWidth}
        height={logoHeight}
        alt="Logo"
        src={logoSrc}
        style={{ cursor: "pointer" }}
        onClick={logoOnClick}
      />
      {showSearchBar && (
        <SearchBar value={searchBarValue} onValueChange={handleValueChange} />
      )}
      {children}
    </Bar>
  );
};

export default React.memo(Header);
