import React, { useState } from "react";

function CardMaker(props) {
  const { image, alt, name, hasBeenClicked } = props;
  return (
    <div>
      <div className="card">
        <img src={image} alt={alt}></img>
        <div className="cardInfoContainer">
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
}

export default CardMaker;
