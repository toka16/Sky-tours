import React from "react";

/**
 * This component is responsible to display details of a single round
 */
const SingleRoundDetails = ({ round, shipName, score }) => (
  <p>
    Round {round}: {shipName} - {score}
  </p>
);

export default SingleRoundDetails;
