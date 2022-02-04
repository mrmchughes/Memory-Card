import React, { useState } from "react";

function CardMaker(props) {
  const { image, alt, name, handleShuffle, incrementScore, endGame } = props;

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
      incrementScore();
      handleShuffle();
    } else {
      endGame();
    }
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={image} alt={alt}></img>

      <p>{name}</p>
    </div>
  );
}

export default CardMaker;
