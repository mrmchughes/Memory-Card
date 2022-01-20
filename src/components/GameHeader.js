import React, { useState } from "react";

function GameHeader() {
  const [score, setScore] = useState(0);
  //perhaps better for setScore to be put into the Card Grid, and the value updated here
  const [highScore, setHighScore] = useState(0);

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
        <div>Score: {score}</div>
        <div>High Score: {highScore}</div>
      </div>
    </div>
  );
}

export default GameHeader;
