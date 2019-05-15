import React from "react";

/*
 * This component is responsible to display game result. 
 * Display player name if we have winner or display "DRAW"
 */
export default function GameResult(props) {
  const isDraw = props.winner === "DRAW";
  return (
    <div className="game-result">
      {!isDraw && <h1>Winner</h1>}
      <h1>{props.winner}</h1>
    </div>
  );
}
