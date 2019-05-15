import { combineReducers } from "redux";

import starships from './starships'
import player from './player'

export default combineReducers({
    starships,
    player1: player('player1'),
    player2: player('player2')
})