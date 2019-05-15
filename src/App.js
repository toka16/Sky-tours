import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import GameResult from "./components/GameResult";
import GameDetails from "./components/GameDetails";

import { loadStarships } from "./utils";

import { setStarships, setPlayerName } from "./store/actions";
import { winnerSelector, isFinishedSelector } from "./store/selectors";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPlayerName("player1", "Luke"));
    dispatch(setPlayerName("player2", "Han"));
  }, [dispatch]);

  useEffect(() => {
    loadStarships().then(starships => {
      dispatch(setStarships(starships));
    });
  }, [dispatch]);

  const isFinished = useSelector(isFinishedSelector);
  const winner = useSelector(winnerSelector);
  const isLoaded = useSelector(state => state.starships.length > 0)

  return (
    <React.Fragment>
      <img className="app-background" src={require('./assets/world.jpg')} alt="world background" />
      <div className="app">
        {isFinished && <GameResult winner={winner} />}
        {isLoaded ? (
          <GameDetails />
        ) : (
            <h1 className="game-loading">Game is loading...</h1>
          )}
      </div>
    </React.Fragment>
  );
}

export default App;
