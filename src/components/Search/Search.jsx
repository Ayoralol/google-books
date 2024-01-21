import React, {useContext, useState} from "react";
import {InformationContext} from "../../context/InformationContextProvider";
import styles from "./Search.module.scss";

const Search = () => {
  const {setSearch, setPage} = useContext(InformationContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedTitle = title.toLowerCase().replace(" ", "%20");
    const formattedAuthor = author.toLowerCase().replace(" ", "%20");
    setSearch({title: formattedTitle, author: formattedAuthor});
    setPage(0);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.form__input_wrap}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.form__input_wrap__input}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className={styles.form__input_wrap__input}
        />
      </div>
      <button type="submit" className={styles.form__btn}>
        Search
      </button>
    </form>
  );
};

export default Search;
