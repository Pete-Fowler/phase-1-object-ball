function gameObject() {
  const stats = {
      home: {
          teamName: "Brooklyn Nets",
          colors: ["Black", "White"],
          players: {
              "Alan Anderson": {
                  number: "0",
                  shoe: "16",
                  points: "22",
                  rebounds: "12",
                  assists: "12",
                  steals: "3",
                  blocks: "1",
                  slamDunks: "1"
              },
              "Reggie Evans": {
                  number: "30",
                  shoe: "14",
                  points: "12",
                  rebounds: "12",
                  assists: "12",
                  steals: "12",
                  blocks: "12",
                  slamDunks: "7"
              },
              "Brook Lopez": {
                  number: "11",
                  shoe: "17",
                  points: "17",
                  rebounds: "19",
                  assists: "10",
                  steals: "3",
                  blocks: "1",
                  slamDunks: "15"
              },
              "Mason Plumlee": {
                  number: "1",
                  shoe: "19",
                  points: "26",
                  rebounds: "12",
                  assists: "6",
                  steals: "3",
                  blocks: "8",
                  slamDunks: "5"
              },
              "Jason Terry": {
                  number: "31",
                  shoe: "15",
                  points: "19",
                  rebounds: "2",
                  assists: "2",
                  steals: "4",
                  blocks: "11",
                  slamDunks: "1"
              }
          }
      },
      away: {
          teamName: "Charlotte Hornets",
          colors: ["Turquoise", "Purple"],
          players: {
              "Jeff Adrien": {
                  number: "4",
                  shoe: "18",
                  points: "10",
                  rebounds: "1",
                  assists: "1",
                  steals: "2",
                  blocks: "7",
                  slamDunks: "2"
              },
              "Bizmak Biyombo": {
                  number: "0",
                  shoe: "16",
                  points: "12",
                  rebounds: "4",
                  assists: "7",
                  steals: "7",
                  blocks: "15",
                  slamDunks: "10"
              },
              "DeSagna Diop": {
                  number: "2",
                  shoe: "14",
                  points: "24",
                  rebounds: "12",
                  assists: "12",
                  steals: "4",
                  blocks: "5",
                  slamDunks: "5"
              },
              "Ben Gordon": {
                  number: "8",
                  shoe: "15",
                  points: "33",
                  rebounds: "3",
                  assists: "2",
                  steals: "1",
                  blocks: "1",
                  slamDunks: "0"
              },
              "Brendan Haywood": {
                  number: "33",
                  shoe: "15",
                  points: "6",
                  rebounds: "12",
                  assists: "12",
                  steals: "22",
                  blocks: "5",
                  slamDunks: "12"
              }
          }
      }
  }
  return stats;
}

function numPointsScored(name) {
  const game = gameObject();
  for (const team in game) {
    const teamObj = game[team];
    for (const teamKey in teamObj) {
      const data = teamObj[teamKey];
      for (const key in data) {
        if (key === name) {
          return data[key].points
        }
      }
      
    }
  }
}

function shoeSize(name) {
  const game = gameObject();
  for(const teamObj in game) {
    const team = game[teamObj];
    for(const teamKey in team) {
      const obj = team[teamKey];
      for (const data in obj) {
        if (data === name) {
          return obj[data].shoe;
        }
      }
    }
  }
}

function teamColors (name) { 
  const game = gameObject();
  for (const team in game) {
    const teamObj = game[team];
    for (const teamKey in teamObj) {
      if (teamObj[teamKey] === name) {
        return teamObj.colors;
      }
    }
  }
}

function teamNames () {
  const game = gameObject();
  let result = [];
  for (const team in game) {
    const teamObj = game[team];
    for (const teamKey in teamObj) {
      if(teamKey === 'teamName') {
        result.push(teamObj[teamKey])
      }
    }
  }
  return result;
}

function playerNumbers(teamName) {
  const game = gameObject();
  const jerseyNums = [];
  for (const team in game) {
    const teamObj = game[team];
    for (const teamObjKey in teamObj) {
    const teamObjProp = teamObj[teamObjKey];
      if( teamObjProp === teamName) {
        const team = {...teamObj};
        const players = team.players;
        for (const player in players) {
          jerseyNums.push(players[player].number);
        }
      }
    }
  }
  return jerseyNums;
}

function playerStats (name) {
  const game = gameObject();
  for (const team in game) {
    const teamObj = game[team];
    for (const teamKey in teamObj) {
      const data = teamObj[teamKey];
      for (const player in data) {
        if (player === name) {
          return data[player];
        }
      }
    }
  }
}

function mostPointsScored() {
  const players = Object.assign({}, gameObject().home.players, gameObject().away.players);
  let winner = {points: 0};
  let best = '';
  for (const player in players) {
    const playerObj = players[player];
    if (parseInt(playerObj.points) > parseInt(winner.points)) {
      winner = {...playerObj};
      best = player;
    }
  }
  console.log(best);
}

// game = {
//       home: {**
//           teamName: "Brooklyn Nets",
//           colors: ["Black", "White"],
//           players: {
//               "Alan Anderson": {
//                   number: "0",
//                   shoe: "16",
//                   points: "22",
//                   rebounds: "12",
//                   assists: "12",
//                   steals: "3",
//                   blocks: "1",
//                   slamDunks: "1"
//               },