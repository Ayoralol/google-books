import React, {useContext} from "react";
import Search from "../../components/Search/Search";
import styles from "./SearchCont.module.scss";

const SearchCont = () => {
  return (
    <nav className={styles.wrap}>
      <Search />
    </nav>
  );
};

export default SearchCont;
