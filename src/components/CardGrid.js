import React, { useState, useEffect } from "react";
import CardMaker from "./CardMaker";
import GameHeader from "./GameHeader";

function CardGrid() {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context("/src/imgs", false, /\.(png|jpe?g|svg)$/)
  );

  const [cards, setCards] = useState([
    {
      image: images["Grog2.jpg"],
      alt: "Grog",
      name: "Grog Strongjaw",
    },
    {
      image: images["Keyleth2.jpg"],
      alt: "Keyleth",
      name: "Keyleth",
    },
    {
      image: images["Percy2.jpg"],
      alt: "Percy",
      name: "Percival de Rolo",
    },
    {
      image: images["Pike2.jpg"],
      alt: "Pike",
      name: "Pike Trickfoot",
    },
    {
      image: images["Scanlan2.jpg"],
      alt: "Scanlan",
      name: "Scanlan Shorthalt",
    },
    {
      image: images["Taryon2.jpg"],
      alt: "Taryon",
      name: "Taryon Darrington",
    },
    {
      image: images["Trinket.jpg"],
      alt: "Trinket",
      name: "Trinket",
    },
    {
      image: images["Vaxildan2.jpg"],
      alt: "Vaxildan",
      name: "Vaxildan",
    },
    {
      image: images["Vexahlia2.jpg"],
      alt: "Vexahlia",
      name: "Vexahlia",
    },
  ]);

  //rework shuffle to be more my own
  function shuffle(a) {
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
  }

  //look at this useEffect to see if I can make any improvements of my own
  //currently runs on load and each time a card is clicked
  useEffect(() => {
    const mountArray = shuffle([...cards]);
    setCards(mountArray);
  }, []);

  //eventually need to remove the console.log
  function handleShuffle() {
    const cardShuffle = shuffle([...cards]);
    setCards(cardShuffle);
    console.log("Shuffle", cards);
  }

  //work on score/setScore, needs to send scores to GameHeader
  const [score, setScore] = useState(0);

  const [highScore, setHighScore] = useState(0);

  function incrementScore() {
    setScore(score + 1);
  }

  // if gameState = false, end the game
  const [gameOver, setGameOver] = useState(false);

  function endGame() {
    alert("Game Over! That card had already been selected.");

    if (score > highScore) {
      setHighScore(score);
    }
    setGameOver(true);
    setScore(0);
  }

  //need to target the specific card, and change it's state
  //also need to reset all cards states on gameOver

  return (
    <div>
      <GameHeader score={score} highScore={highScore} />

      <div className="cardGridContainer">
        {cards.map((card) => (
          <CardMaker
            image={card.image}
            alt={card.alt}
            name={card.name}
            key={card.name}
            handleShuffle={handleShuffle}
            incrementScore={incrementScore}
            endGame={endGame}
            className="gridItem"
          />
        ))}
      </div>
    </div>
  );
}

export default CardGrid;
