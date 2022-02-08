import React, { useState, useEffect } from "react";
import cardArray from "./cardArray";
import CardMaker from "./CardMaker";
import GameHeader from "./GameHeader";

function CardGrid() {
  const [scoredCards, setScoredCards] = useState([]);
  const newGameCards = cardArray;

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const shuffle = (a) => {
    let ctr = a.length,
      temp,
      index;
    while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = a[ctr];
      a[ctr] = a[index];
      a[index] = temp;
    }
    return a;
  };

  useEffect(() => {
    shuffle(newGameCards);
  }, [scoredCards]);

  const incrementScore = () => {
    setScore(score + 1);
  };

  const endGame = () => {
    if (score > highScore) {
      setHighScore(score);
    }

    setScore(0);
    console.log("Game finished");
    setScoredCards([]);
  };

  function handleClick(name) {
    if (!scoredCards.includes(name)) {
      setScoredCards((scoredCards) => [...scoredCards, name]);
      incrementScore();
      console.log(name + " added to scoredCards" + scoredCards);
    } else {
      endGame();
    }
  }

  return (
    <div>
      <GameHeader score={score} highScore={highScore} />

      <div className="cardGridContainer">
        {newGameCards.map((card) => {
          return (
            <div key={card.id} className="gridItem">
              <CardMaker
                image={card.image}
                alt={card.alt}
                name={card.name}
                handleClick={handleClick}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardGrid;
