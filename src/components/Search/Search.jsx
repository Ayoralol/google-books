import React, {useContext, useState} from "react";
import {InformationContext} from "../../context/InformationContextProvider";

const Search = () => {
  const {setSearch} = useContext(InformationContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedTitle = title.toLowerCase().replace(" ", "%20");
    const formattedAuthor = author.toLowerCase().replace(" ", "%20");
    setSearch({title: formattedTitle, author: formattedAuthor});
    console.log(formattedTitle, formattedAuthor);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
