import React, {useContext} from "react";
import {InformationContext} from "../../context/InformationContextProvider";
import styles from "./Header.module.scss";

const Header = () => {
  const {search, firstSearch} = useContext(InformationContext);

  let searchString = "";
  if (search.title) {
    searchString += `Title: ${search.title}`;
  }
  if (search.title && search.author) {
    searchString += ", ";
  }
  if (search.author) {
    searchString += `Author: ${search.author}`;
  }

  searchString = searchString.trim().replace(/%20/g, " ");

  return (
    <header className={styles.head}>
      <h1 className={styles.head__heading}>Google Books</h1>
      {!firstSearch ? (
        <div className={styles.head__lSearch}>
          <p className={styles.head__lSearch__text}>Last Search:</p>
          <p className={styles.head__lSearch__text}>{searchString}</p>
        </div>
      ) : (
        <div className={styles.head__lSearch}></div>
      )}
    </header>
  );
};

export default Header;
