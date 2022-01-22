import React, { useState } from "react";

function GameHeader() {
  return (
    <div className="GameHeader">
      <div className="GameIntro">
        <h1>Critical Role Memory Game</h1>

        <div>
          Get points by clicking on an image, but don't click on any image more
          than once!
        </div>
      </div>

      <div className="scoreBoard">
        <div>Score: {}</div>
        <div>High Score: {}</div>
      </div>
    </div>
  );
}

export default GameHeader;
