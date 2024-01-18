import React, {createContext, useState, useEffect} from "react";
import {bookSearch} from "../services/bookSearch.js";

export const InformationContext = createContext();

const InformationContextProvider = ({children}) => {
  const [search, setSearch] = useState({title: "", author: ""});
  const [results, setResults] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (search.title || search.author) {
      bookSearch(search.title, search.author, page * 20)
        .then((data) => {
          setResults(data);
        })
        .catch((err) => console.error(err));
    }
  }, [search, page]);

  return (
    <InformationContext.Provider
      value={{
        search,
        setSearch,
        results,
        selectedId,
        setSelectedId,
        showModal,
        setShowModal,
        page,
        setPage,
      }}>
      {children}
    </InformationContext.Provider>
  );
};

export default InformationContextProvider;
