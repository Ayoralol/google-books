import React, {useContext} from "react";
import {InformationContext} from "../../context/InformationContextProvider";

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

  return (
    <div>
      <h2>{selectedItem.volumeInfo.title}</h2>
      <h3>{selectedItem.volumeInfo.authors}</h3>
      <img
        src={selectedItem.volumeInfo.imageLinks.thumbnail}
        alt={selectedItem.volumeInfo.title}
      />
      <p>{selectedItem.volumeInfo.description}</p>
      <button onClick={handleClose}>Close</button>
    </div>
  );
};

export default Modal;
