"use client";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "@/store/moviesSlice";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

export default function Wrapper() {
  const dispatch = useDispatch();
  const query = useSelector((state: any) => state.search.query);

  const handleSearchBarChange = (newValue: string) => {
    dispatch(setSearchQuery(newValue));
  };

  return (
    <>
      <Header
        showSearchBar={true}
        searchBarValue={query}
        onSearchBarValueChange={handleSearchBarChange}
      />
      <Body />
      <Footer />
    </>
  );
}
