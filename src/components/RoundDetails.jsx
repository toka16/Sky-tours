import React from "react";

import SingleRoundDetails from "./SingleRoundDetails";

/**
 * This component is responsible to display round details
 */
const RoundDetails = ({ rounds }) => (
  <div>
    {rounds.map(round => (
      <SingleRoundDetails {...{ ...round, key: round.round }} />
    ))}
  </div>
);

export default RoundDetails;