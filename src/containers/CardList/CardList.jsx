import React, {useContext} from "react";
import {InformationContext} from "../../context/InformationContextProvider";
import Card from "../../components/Card/Card";

const CardList = () => {
  const {
    results,
    setSelectedId,
    setShowModal,
    page,
    setPage,
    loading,
    firstSearch,
  } = useContext(InformationContext);

  const items = results?.items;
  const maxPage = Math.ceil(results?.totalItems / 20);

  const handleClick = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  if (firstSearch) {
    return <p>Search for a book!</p>;
  }

  if (loading && (!items || items.length === 0)) {
    return <p>Loading Books...</p>;
  }

  if (!items || items.length === 0) {
    return <p>No Books Found...sorry!</p>;
  }

  return (
    <main>
      <div>
        <button
          onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 0))}
          disabled={page === 0}>
          Previous
        </button>
        <p>
          Page {page + 1} of {maxPage}
        </p>
        <button
          onClick={() => setPage((prevPage) => prevPage + 1)}
          disabled={page === maxPage}>
          Next
        </button>
      </div>
      {items.map((result, index) => (
        <Card
          key={index}
          data={result}
          onClick={() => handleClick(result.id)}
        />
      ))}
    </main>
  );
};

export default CardList;
