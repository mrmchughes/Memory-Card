import React, { useState, useEffect } from "react";
import CardMaker from "./CardMaker";

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

  return (
    <div className="cardGridContainer">
      {cards.map((card) => (
        <CardMaker
          key={card.name}
          handleShuffle={handleShuffle}
          className="gridItem"
          image={card.image}
          alt={card.alt}
          name={card.name}
          hasBeenClicked={card.hasBeenClicked}
        />
      ))}
    </div>
  );
}

export default CardGrid;
