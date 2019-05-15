import React from "react";
import { useSelector } from "react-redux";

import PlayerDetails from "./PlayerDetails";
import GameActionButton from './GameActionButton'

/**
 * This component is responsible to display game process
 */
export default function GameDetails(props) {
  const player1 = useSelector(state => state.player1);
  const player2 = useSelector(state => state.player2);

  return (
    <div className="game-details">
      <PlayerDetails player={player1} />
      <GameActionButton />
      <PlayerDetails player={player2} />
    </div>
  );
}
