import React, {useContext} from "react";
import {InformationContext} from "../../context/InformationContextProvider";
import Card from "../../components/Card/Card";
import styles from "./CardList.module.scss";

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
    return <p className={styles.other_text}>Search for a book!</p>;
  }

  if (loading && (!items || items.length === 0)) {
    return <p className={styles.other_text}>Loading Books...</p>;
  }

  if (!items || items.length === 0) {
    return <p className={styles.other_text}>No Books Found...sorry!</p>;
  }

  return (
    <main className={styles.main}>
      <div className={styles.main__btn_wrap}>
        <button
          onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 0))}
          disabled={page === 0}
          className={styles.main__btn_wrap__btn}>
          Previous Page
        </button>
        <button
          onClick={() => setPage((prevPage) => prevPage + 1)}
          disabled={page === maxPage}
          className={styles.main__btn_wrap__btn}>
          Next Page
        </button>
      </div>
      <div className={styles.main__card_wrap}>
        {items.map((result, index) => (
          <Card
            key={index}
            data={result}
            onClick={() => handleClick(result.id)}
          />
        ))}
      </div>
    </main>
  );
};

export default CardList;
