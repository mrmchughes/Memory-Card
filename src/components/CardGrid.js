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

  const cards = [
    {
      image: images["Grog2.jpg"],
      alt: "Grog",
      name: "Grog Strongjaw",
      hasBeenClicked: false,
    },
    {
      image: images["Keyleth2.jpg"],
      alt: "Keyleth",
      name: "Keyleth",
      hasBeenClicked: false,
    },
    {
      image: images["Percy2.jpg"],
      alt: "Percy",
      name: "Percival de Rolo",
      hasBeenClicked: false,
    },
    {
      image: images["Pike2.jpg"],
      alt: "Pike",
      name: "Pike Trickfoot",
      hasBeenClicked: false,
    },
    {
      image: images["Scanlan2.jpg"],
      alt: "Scanlan",
      name: "Scanlan Shorthalt",
      hasBeenClicked: false,
    },
    {
      image: images["Taryon2.jpg"],
      alt: "Taryon",
      name: "Taryon Darrington",
      hasBeenClicked: false,
    },
    {
      image: images["Trinket.jpg"],
      alt: "Trinket",
      name: "Trinket",
      hasBeenClicked: false,
    },
    {
      image: images["Vaxildan2.jpg"],
      alt: "Vaxildan",
      name: "Vaxildan",
      hasBeenClicked: false,
    },
    {
      image: images["Vexahlia2.jpg"],
      alt: "Vexahlia",
      name: "Vexahlia",
      hasBeenClicked: false,
    },
  ];

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

  const [list, setList] = useState(cards);
  useEffect(() => {
    const mountArray = shuffle([...cards]);
    setList(mountArray);
  }, []);

  function handleShuffle() {
    const changes = shuffle([...list]);
    setList(changes);
    console.log("Shuffle", cards);
  }

  const [score, setScore] = useState(0);
  //perhaps better for setScore to be put into the Card Grid, and the value updated here
  const [highScore, setHighScore] = useState(0);

  return (
    <div className="cardGridContainer">
      {list.map((card) => (
        <div onClick={handleShuffle} key={card.name}>
          <CardMaker
            className="gridItem"
            image={card.image}
            alt={card.alt}
            name={card.name}
            hasBeenClicked={card.hasBeenClicked}
          />
        </div>
      ))}
    </div>
  );
}

export default CardGrid;
