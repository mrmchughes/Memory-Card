import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import CardMaker from "./CardMaker";
import GameHeader from "./GameHeader";

function CardGrid() {
  const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  };

  const images = importAll(
    require.context("/src/imgs", false, /\.(png|jpe?g|svg)$/)
  );

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const [cards, setCards] = useState([
    {
      image: images["Grog2.jpg"],
      alt: "Grog",
      name: "Grog Strongjaw",
      id: uniqid(),
    },
    {
      image: images["Keyleth2.jpg"],
      alt: "Keyleth",
      name: "Keyleth",
      id: uniqid(),
    },
    {
      image: images["Percy2.jpg"],
      alt: "Percy",
      name: "Percival de Rolo",
      id: uniqid(),
    },
    {
      image: images["Pike2.jpg"],
      alt: "Pike",
      name: "Pike Trickfoot",
      id: uniqid(),
    },
    {
      image: images["Scanlan2.jpg"],
      alt: "Scanlan",
      name: "Scanlan Shorthalt",
      id: uniqid(),
    },
    {
      image: images["Taryon2.jpg"],
      alt: "Taryon",
      name: "Taryon Darrington",
      id: uniqid(),
    },
    {
      image: images["Trinket.jpg"],
      alt: "Trinket",
      name: "Trinket",
      id: uniqid(),
    },
    {
      image: images["Vaxildan2.jpg"],
      alt: "Vaxildan",
      name: "Vaxildan",
      id: uniqid(),
    },
    {
      image: images["Vexahlia2.jpg"],
      alt: "Vexahlia",
      name: "Vexahlia",
      id: uniqid(),
    },
    {
      image: images["Arkhan.jpg"],
      alt: "Arkhan",
      name: "Arkhan",
      id: uniqid(),
    },
    {
      image: images["Beauregard.jpg"],
      alt: "Beauregard",
      name: "Beauregard",
      id: uniqid(),
    },
    {
      image: images["Caduceus.jpg"],
      alt: "Caduceus",
      name: "Caduceus",
      id: uniqid(),
    },
    {
      image: images["Caleb_Widogast.jpg"],
      alt: "Caleb Widogast",
      name: "Caleb Widogast",
      id: uniqid(),
    },
    {
      image: images["Calianna.jpg"],
      alt: "Calianna",
      name: "Calianna",
      id: uniqid(),
    },
    {
      image: images["Fjord.jpg"],
      alt: "Fjord",
      name: "Fjord",
      id: uniqid(),
    },
    {
      image: images["Garthok.jpg"],
      alt: "Garthok",
      name: "Garthok",
      id: uniqid(),
    },
    {
      image: images["Jester.jpg"],
      alt: "Jester",
      name: "Jester",
      id: uniqid(),
    },
    {
      image: images["Kashaw.jpg"],
      alt: "Kashaw",
      name: "Kashaw",
      id: uniqid(),
    },
    {
      image: images["Keg.jpg"],
      alt: "Keg",
      name: "Keg",
      id: uniqid(),
    },
    {
      image: images["Kerrek.jpg"],
      alt: "Kerrek",
      name: "Kerrek",
      id: uniqid(),
    },
    {
      image: images["Lillith.jpg"],
      alt: "Lilith",
      name: "Lilith",
      id: uniqid(),
    },
    {
      image: images["Lionel_Gayheart.jpg"],
      alt: "Lionel Gayheart",
      name: "Lionel Gayheart",
      id: uniqid(),
    },
    {
      image: images["Lyra.jpg"],
      alt: "Lyra",
      name: "Lyra",
      id: uniqid(),
    },
    {
      image: images["Mollymauk.jpg"],
      alt: "Mollymauk",
      name: "Mollymauk",
      id: uniqid(),
    },
    {
      image: images["Nila.jpg"],
      alt: "Nila",
      name: "Nila",
      id: uniqid(),
    },
    {
      image: images["Nott.jpg"],
      alt: "Nott",
      name: "Nott",
      id: uniqid(),
    },
    {
      image: images["Reani.jpg"],
      alt: "Reani",
      name: "Reani",
      id: uniqid(),
    },
    {
      image: images["Shakaste.jpg"],
      alt: "Shakaste",
      name: "Shakaste",
      id: uniqid(),
    },
    {
      image: images["Shale.jpg"],
      alt: "Shale",
      name: "Shale",
      id: uniqid(),
    },
    {
      image: images["Sprigg.jpg"],
      alt: "Sprigg",
      name: "Sprigg",
      id: uniqid(),
    },
    {
      image: images["Spurt.jpg"],
      alt: "Spurt",
      name: "Spurt",
      id: uniqid(),
    },
    {
      image: images["Thorbir.jpg"],
      alt: "Thorbir",
      name: "Thorbir",
      id: uniqid(),
    },
    {
      image: images["Tova.jpg"],
      alt: "Tova",
      name: "Tova",
      id: uniqid(),
    },
    {
      image: images["Twiggy.jpg"],
      alt: "Twiggy",
      name: "Twiggy",
      id: uniqid(),
    },
    {
      image: images["Yasha.jpg"],
      alt: "Yasha",
      name: "Yasha",
      id: uniqid(),
    },
    {
      image: images["Zahra.jpg"],
      alt: "Zahra",
      name: "Zahra",
      id: uniqid(),
    },
  ]);

  const newGameCards = [
    {
      image: images["Grog2.jpg"],
      alt: "Grog",
      name: "Grog Strongjaw",
      id: uniqid(),
    },
    {
      image: images["Keyleth2.jpg"],
      alt: "Keyleth",
      name: "Keyleth",
      id: uniqid(),
    },
    {
      image: images["Percy2.jpg"],
      alt: "Percy",
      name: "Percival de Rolo",
      id: uniqid(),
    },
    {
      image: images["Pike2.jpg"],
      alt: "Pike",
      name: "Pike Trickfoot",
      id: uniqid(),
    },
    {
      image: images["Scanlan2.jpg"],
      alt: "Scanlan",
      name: "Scanlan Shorthalt",
      id: uniqid(),
    },
    {
      image: images["Taryon2.jpg"],
      alt: "Taryon",
      name: "Taryon Darrington",
      id: uniqid(),
    },
    {
      image: images["Trinket.jpg"],
      alt: "Trinket",
      name: "Trinket",
      id: uniqid(),
    },
    {
      image: images["Vaxildan2.jpg"],
      alt: "Vaxildan",
      name: "Vaxildan",
      id: uniqid(),
    },
    {
      image: images["Vexahlia2.jpg"],
      alt: "Vexahlia",
      name: "Vexahlia",
      id: uniqid(),
    },
    {
      image: images["Arkhan.jpg"],
      alt: "Arkhan",
      name: "Arkhan",
      id: uniqid(),
    },
    {
      image: images["Beauregard.jpg"],
      alt: "Beauregard",
      name: "Beauregard",
      id: uniqid(),
    },
    {
      image: images["Caduceus.jpg"],
      alt: "Caduceus",
      name: "Caduceus",
      id: uniqid(),
    },
    {
      image: images["Caleb_Widogast.jpg"],
      alt: "Caleb Widogast",
      name: "Caleb Widogast",
      id: uniqid(),
    },
    {
      image: images["Calianna.jpg"],
      alt: "Calianna",
      name: "Calianna",
      id: uniqid(),
    },
    {
      image: images["Fjord.jpg"],
      alt: "Fjord",
      name: "Fjord",
      id: uniqid(),
    },
    {
      image: images["Garthok.jpg"],
      alt: "Garthok",
      name: "Garthok",
      id: uniqid(),
    },
    {
      image: images["Jester.jpg"],
      alt: "Jester",
      name: "Jester",
      id: uniqid(),
    },
    {
      image: images["Kashaw.jpg"],
      alt: "Kashaw",
      name: "Kashaw",
      id: uniqid(),
    },
    {
      image: images["Keg.jpg"],
      alt: "Keg",
      name: "Keg",
      id: uniqid(),
    },
    {
      image: images["Kerrek.jpg"],
      alt: "Kerrek",
      name: "Kerrek",
      id: uniqid(),
    },
    {
      image: images["Lillith.jpg"],
      alt: "Lilith",
      name: "Lilith",
      id: uniqid(),
    },
    {
      image: images["Lionel_Gayheart.jpg"],
      alt: "Lionel Gayheart",
      name: "Lionel Gayheart",
      id: uniqid(),
    },
    {
      image: images["Lyra.jpg"],
      alt: "Lyra",
      name: "Lyra",
      id: uniqid(),
    },
    {
      image: images["Mollymauk.jpg"],
      alt: "Mollymauk",
      name: "Mollymauk",
      id: uniqid(),
    },
    {
      image: images["Nila.jpg"],
      alt: "Nila",
      name: "Nila",
      id: uniqid(),
    },
    {
      image: images["Nott.jpg"],
      alt: "Nott",
      name: "Nott",
      id: uniqid(),
    },
    {
      image: images["Reani.jpg"],
      alt: "Reani",
      name: "Reani",
      id: uniqid(),
    },
    {
      image: images["Shakaste.jpg"],
      alt: "Shakaste",
      name: "Shakaste",
      id: uniqid(),
    },
    {
      image: images["Shale.jpg"],
      alt: "Shale",
      name: "Shale",
      id: uniqid(),
    },
    {
      image: images["Sprigg.jpg"],
      alt: "Sprigg",
      name: "Sprigg",
      id: uniqid(),
    },
    {
      image: images["Spurt.jpg"],
      alt: "Spurt",
      name: "Spurt",
      id: uniqid(),
    },
    {
      image: images["Thorbir.jpg"],
      alt: "Thorbir",
      name: "Thorbir",
      id: uniqid(),
    },
    {
      image: images["Tova.jpg"],
      alt: "Tova",
      name: "Tova",
      id: uniqid(),
    },
    {
      image: images["Twiggy.jpg"],
      alt: "Twiggy",
      name: "Twiggy",
      id: uniqid(),
    },
    {
      image: images["Yasha.jpg"],
      alt: "Yasha",
      name: "Yasha",
      id: uniqid(),
    },
    {
      image: images["Zahra.jpg"],
      alt: "Zahra",
      name: "Zahra",
      id: uniqid(),
    },
  ];

  //rework shuffle to be more my own
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

  const handleShuffle = () => {
    const cardShuffle = shuffle([...cards]);
    setCards(cardShuffle);
  };

  const incrementScore = () => {
    setScore(score + 1);
  };

  const endGame = () => {
    console.log("Game Over! That card had already been selected.");

    if (score > highScore) {
      setHighScore(score);
    }

    setScore(0);
    setCards(newGameCards);
  };

  return (
    <div>
      <GameHeader score={score} highScore={highScore} />

      <div className="cardGridContainer">
        {cards.map((card) => {
          return (
            <div key={card.id} className="gridItem">
              <CardMaker
                image={card.image}
                alt={card.alt}
                name={card.name}
                handleShuffle={handleShuffle}
                incrementScore={incrementScore}
                endGame={endGame}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardGrid;
