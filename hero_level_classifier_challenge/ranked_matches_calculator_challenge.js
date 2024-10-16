//List of players, containing their names, wins, and losses in the game:
let player = [
    ["ImDeadWarrior", 110, 5],
    ["Losted", 90, 6],
    ["Leaker", 83, 9]
];

//List of available rankings in the game:
const rankings = [
    { limit: 10, rank: "Iron" }, //position 0
    { limit: 20, rank: "Bronze" }, //position 1
    { limit: 50, rank: "Silver" }, //position 2
    { limit: 80, rank: "Gold" }, //position 3
    { limit: 90, rank: "Platinum" }, //position 4
    { limit: 100, rank: "Diamond" }, //position 5
    { limit: 110, rank: "Ascendant" }, //position 6
    { limit: 120, rank: "Imortal" } //position 7
];

function getPlayerRank(wins, losses) {
    let mediaWinsAndLosses = wins - losses 
    //i starts at 0 and goes until 7, which is the length of the "rankings" array:
    for(let i = 0; i < rankings.length; i++) {
        if(mediaWinsAndLosses <= rankings[i].limit) {
            return rankings[i].rank;
        }
    }
    return "Radiant";
}

//Destructuring of [name, wins, losses] so I can access both directly:
player.forEach(([name, wins, losses]) => {
    console.log(`The player ${name} is ${getPlayerRank(wins, losses)}!`);
});