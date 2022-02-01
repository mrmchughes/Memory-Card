import React, { useState } from "react";

function CardMaker(props) {
  const { image, alt, name, hasBeenClicked } = props;
  return (
    <div className="card">
      <img src={image} alt={alt}></img>

      <p>{name}</p>
    </div>
  );
}

export default CardMaker;
