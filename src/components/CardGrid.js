import React, { useState } from "react";
import CardMaker from "./CardMaker";

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

function CardGrid() {
  return (
    <div className="cardGridContainer">
      <CardMaker
        className="gridItem"
        image={images["Grog2.jpg"]}
        alt="Grog"
        name="Grog Strongjaw"
      />

      <CardMaker
        className="gridItem"
        image={images["Keyleth2.jpg"]}
        alt="Keyleth"
        name="Keyleth"
      />

      <CardMaker
        className="gridItem"
        image={images["Percy2.jpg"]}
        alt="Percy"
        name="Percival de Rolo"
      />

      <CardMaker
        className="gridItem"
        image={images["Pike2.jpg"]}
        alt="Pike"
        name="Pike Trickfoot"
      />

      <CardMaker
        className="gridItem"
        image={images["Scanlan2.jpg"]}
        alt="Scanlan"
        name="Scanlan Shorthalt"
      />

      <CardMaker
        className="gridItem"
        image={images["Taryon2.jpg"]}
        alt="Taryon"
        name="Taryon Darrington"
      />

      <CardMaker
        className="gridItem"
        image={images["Trinket.jpg"]}
        alt="Trinket"
        name="Trinket"
      />

      <CardMaker
        className="gridItem"
        image={images["Vaxildan2.jpg"]}
        alt="Vaxildan"
        name="Vaxildan"
      />

      <CardMaker
        className="gridItem"
        image={images["Vexahlia2.jpg"]}
        alt="Vexahlia"
        name="Vexahlia"
      />
    </div>
  );
}

export default CardGrid;
