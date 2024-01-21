import React, {useContext} from "react";
import {InformationContext} from "../../context/InformationContextProvider";
import styles from "./Modal.module.scss";

const Modal = () => {
  const {results, selectedId, showModal, setShowModal} =
    useContext(InformationContext);
  const items = results?.items;

  const selectedItem = Array.isArray(items)
    ? items.find((item) => item.id === selectedId)
    : null;

  if (!showModal || !selectedItem) {
    return null;
  }

  const handleClose = (e) => {
    setShowModal(false);
  };

  const thumbnail = selectedItem.volumeInfo?.imageLinks?.thumbnail;
  const description = selectedItem.volumeInfo?.description;
  const authors = selectedItem.volumeInfo?.authors;
  const title = selectedItem.volumeInfo?.title;
  const publishedDate = selectedItem.volumeInfo?.publishedDate;
  const pageCount = selectedItem.volumeInfo?.pageCount;

  return (
    <div className={styles.wrapper} onClick={handleClose}>
      <div className={styles.cont}>
        <h2 className={styles.cont__title}>{title || "No title available"}</h2>
        <h3 className={styles.cont__auth}>
          {authors || "No authors available"}
        </h3>
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title || "No title available"}
            className={styles.cont__img}
          />
        ) : (
          <p>No image available</p>
        )}
        <p className={styles.cont__date}>
          Published:{" "}
          {publishedDate
            ? new Date(publishedDate).toLocaleDateString("en-GB")
            : "No published date available"}
        </p>
        <p className={styles.cont__pages}>
          Page Count: {pageCount || "No page count available"}
        </p>
        <p className={styles.cont__desc}>
          {description || "No description available"}
        </p>
        <button onClick={handleClose} className={styles.cont__btn}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
