import React from "react";
import styles from "./Card.module.scss";

const Card = ({data, onClick}) => {
  const thumbnail = data.volumeInfo?.imageLinks?.thumbnail;
  const description = data.volumeInfo?.description?.slice(0, 250);

  return (
    <article onClick={onClick} className={styles.cont}>
      <h2 className={styles.cont__head}>{data.volumeInfo.title}</h2>
      <h3 className={styles.cont__auth}>{data.volumeInfo.authors}</h3>
      <div className={styles.cont__body}>
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={data.volumeInfo.title}
            className={styles.cont__body__img}
          />
        ) : (
          <p className={styles.cont__body__desc}>No image available</p>
        )}
        <p className={styles.cont__body__desc}>
          {description ? description + "..." : "No description available"}
        </p>
      </div>
    </article>
  );
};

export default Card;
