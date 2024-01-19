import React, {createContext, useState, useEffect} from "react";
import {bookSearch} from "../services/bookSearch.js";

export const InformationContext = createContext();

const InformationContextProvider = ({children}) => {
  const [search, setSearch] = useState({title: "", author: ""});
  const [results, setResults] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [firstSearch, setFirstSearch] = useState(true);

  useEffect(() => {
    performSearch();
  }, [search, page]);

  const performSearch = () => {
    if (search.title || search.author) {
      setLoading(true);
      setFirstSearch(false);
      bookSearch(search.title, search.author, page * 20)
        .then((data) => {
          setResults(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  };

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
        loading,
        firstSearch,
      }}>
      {children}
    </InformationContext.Provider>
  );
};

export default InformationContextProvider;
