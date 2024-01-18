import React, {useContext} from "react";
import Search from "../../components/Search/Search";
import {InformationContext} from "../../context/InformationContextProvider";

const SearchCont = () => {
  const {results} = useContext(InformationContext);
  const resultCount = results?.totalItems;
  return (
    <nav>
      <Search />
      {resultCount && <p>{resultCount} total results</p>}
    </nav>
  );
};

export default SearchCont;
