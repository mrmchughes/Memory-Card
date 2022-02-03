import React, { useState } from "react";

function CardMaker(props) {
  const { image, alt, name, handleShuffle } = props;

  const [clicked, setClicked] = useState(false);

  let cardInfo = "";

  clicked
    ? (cardInfo = "has been clicked")
    : (cardInfo = "has not been clicked");

  function handleClick() {
    setClicked(true);
    handleShuffle();
  }

  return (
    <div className="card" onClick={handleClick}>
      <img src={image} alt={alt}></img>

      <p>
        {name} {cardInfo}
      </p>
    </div>
  );
}

export default CardMaker;
