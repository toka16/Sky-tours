import {totalScore} from '../../utils'

export const isNewGameSelector = state =>
         state.player1.rounds.length === 0 &&
         state.player2.rounds.length === 0;

export const isFinishedSelector = state =>
         state.player1.rounds.length === 3 &&
         state.player2.rounds.length === 3;

export const winnerSelector = state => {
    if (isFinishedSelector(state)) {
        const player1Score = totalScore(state.player1);
        const player2Score = totalScore(state.player2);

        if (player1Score > player2Score) {
            return state.player1.name;
        }
        if (player2Score > player1Score) {
            return state.player2.name;
        }
        return "DRAW";
    }
}