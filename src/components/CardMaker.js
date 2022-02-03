import React, { useState } from "react";

function CardMaker(props) {
  const { image, alt, name, handleShuffle, incrementScore, endGame } = props;

  const [clicked, setClicked] = useState(false);

  function handleClick() {
    if (!clicked) {
      setClicked(true);
      incrementScore();
      handleShuffle();
    } else {
      endGame();
    }
  }

  let cardInfo = "";

  clicked
    ? (cardInfo = "has been clicked")
    : (cardInfo = "has not been clicked");

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
