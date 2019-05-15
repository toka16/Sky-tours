import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { isNewGameSelector, isFinishedSelector } from "../store/selectors";
import { addPlayerRound, reset } from "../store/actions";

import { randomStarship } from "../utils";

/**
 * This component is responsible to display appropriate button in different state of the game
 * It can be "Start Game", "Next Round" or "New Game"
 */
export default function GameActionButton() {
  const dispatch = useDispatch();

  const isNewGame = useSelector(isNewGameSelector);
  const isFinished = useSelector(isFinishedSelector);
  const starships = useSelector(state => state.starships);

  const nextRound = () => {
    dispatch(addPlayerRound("player1", randomStarship(starships)));
    dispatch(addPlayerRound("player2", randomStarship(starships)));
  };
  const newGame = () => {
    dispatch(reset());
  };
  const onAction = () => {
    if (isFinished) {
      newGame();
    } else {
      nextRound();
    }
  };

  return (
    <button className="game-action-button" onClick={onAction}>
      {isNewGame ? "Start Game" : isFinished ? "New Game" : "Next Round"}
    </button>
  );
}
