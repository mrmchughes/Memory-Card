import React, { useState } from "react";

function ScoreBoard() {
  const [score, setScore] = useState(0);

  const [highScore, setHighScore] = useState(0);

  return (
    <div>
      <div>Score: {score}</div>
      <div>High Score: {highScore}</div>
    </div>
  );
}

export default ScoreBoard;
