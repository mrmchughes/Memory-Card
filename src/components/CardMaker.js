import React from "react";

function CardMaker(props) {
  const { image, alt, name, handleClick } = props;

  return (
    <div className="card" onClick={() => handleClick(name)}>
      <img src={image} alt={alt}></img>

      <p>{name}</p>
    </div>
  );
}

export default CardMaker;
