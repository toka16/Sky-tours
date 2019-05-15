import React from "react";

import RoundDetails from "./RoundDetails";

/**
 * This component is responsible to display player details
 */
const PlayerDetails = ({ player }) => (
  <div className="player-details">
    <RoundDetails rounds={player.rounds} />
    <img
      className="player-rocket"
      src={require("../assets/rocket.png")}
      alt="spaceship"
    />
    <h2>{player.name}</h2>
  </div>
);

export default PlayerDetails;
