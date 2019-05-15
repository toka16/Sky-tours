import config from "../config";
// retrive starships data from remote url
// load all pages and return one concatenated array
export const retrieveStarshipData = async () => {
  const results = [];
  let url = config.starships_url;
  while (url) {
    const res = await fetch(url);
    const data = await res.json();
    // arr.push(...otherArr) is much faster then arr.concat(otherArr)
    results.push(...data.results);
    url = data.next;
  }
  return results;
};

// load starship data, filter and transform for our internal needs
export const loadStarships = () => {
  return retrieveStarshipData()
    .then(starships =>
      // filter out starships which doesn't have numbers in their 'max_atmosphering_speed' field.
      // this will filter out 'n/a' and 'unknown'
      starships.filter(ship => /[0-9]/.test(ship.max_atmosphering_speed))
    )
    .then(starships =>
      // we need only starship name and speed from received data
      starships.map(ship => ({
        shipName: ship.name,
        score: extractNumber(ship.max_atmosphering_speed) // speed is score for us
      }))
    );
};

// calculate total score for player
export const totalScore = player => {
  return player.rounds.reduce((acc, val) => acc + val.score, 0);
};

// try to extract number from string.
// first remove all non-numerical symbols and then parse it as integer
export const extractNumber = num => {
  return parseInt(num.replace(/[a-zA-Z]/g, ""));
};

// choose random starship from the given array of starships
export const randomStarship = starships => {
  return starships[Math.floor(Math.random() * starships.length)];
};
