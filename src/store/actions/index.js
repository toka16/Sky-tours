export const setStarships = (starships) => ({
    type: 'SET_STARSHIPS',
    starships
})

export const setPlayerName = (player, name) => ({
    type: player+'_SET_NAME',
    name
})

export const addPlayerRound = (player, round) => ({
    type: player + '_ADD_ROUND',
    round
})

export const reset = () => ({
    type: 'RESET'
})