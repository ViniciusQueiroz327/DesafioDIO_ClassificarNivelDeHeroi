//List of players, containing their names and scores in the game:
let player = [
    ["ImDeadWarrior", 9500],
    ["Losted", 8500],
    ["Leaker", 7500]
];

//List of available rankings in the game:
const rankings = [
    { limit: 1000, rank: "Iron" }, //position 0
    { limit: 2000, rank: "Bronze" }, //position 1
    { limit: 5000, rank: "Silver" }, //position 2
    { limit: 7000, rank: "Gold" }, //position 3
    { limit: 8000, rank: "Platinum" }, //position 4
    { limit: 9000, rank: "Diamond" }, //position 5
    { limit: 10000, rank: "Ascendant" }, //position 6
    { limit: 11000, rank: "Imortal" } //position 7
];

function getPlayerRank(score) {
    //i starts at 0 and goes until 7, which is the length of the "rankings" array:
    for(let i = 0; i < rankings.length; i++) {
        if(score <= rankings[i].limit) {
            return rankings[i].rank;
        }
    }
    return "Radiant";
}

//Destructuring of [name, score] so I can access both directly:
player.forEach(([name, score]) => {
    console.log(`The player ${name} is ${getPlayerRank(score)}!`);
});