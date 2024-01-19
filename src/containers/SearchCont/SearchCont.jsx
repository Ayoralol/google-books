import React, {useContext} from "react";
import Search from "../../components/Search/Search";
import {InformationContext} from "../../context/InformationContextProvider";

const SearchCont = () => {
  const {results} = useContext(InformationContext);
  return (
    <nav>
      <Search />
    </nav>
  );
};

export default SearchCont;
