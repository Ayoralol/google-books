import React, {useContext} from "react";
import {InformationContext} from "../../context/InformationContextProvider";
import Card from "../../components/Card/Card";

const CardList = () => {
  const {results, setSelectedId, setShowModal, page, setPage} =
    useContext(InformationContext);
  const items = results?.items;

  const handleClick = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  return (
    <main>
      {Array.isArray(items) &&
        items.map((result, index) => (
          <Card
            key={index}
            data={result}
            onClick={() => handleClick(result.id)}
          />
        ))}
      <button
        onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 0))}
        disabled={page === 0}>
        Previous
      </button>
      <button onClick={() => setPage((prevPage) => prevPage + 1)}>Next</button>
    </main>
  );
};

export default CardList;
