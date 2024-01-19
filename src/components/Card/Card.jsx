import React from "react";

const Card = ({data, onClick}) => {
  const thumbnail = data.volumeInfo?.imageLinks?.thumbnail;
  const description = data.volumeInfo?.description?.slice(0, 250);

  return (
    <article onClick={onClick}>
      <h2>{data.volumeInfo.title}</h2>
      <h3>{data.volumeInfo.authors}</h3>
      {thumbnail && <img src={thumbnail} alt={data.volumeInfo.title} />}
      <p>{description}...</p>
    </article>
  );
};

export default Card;
