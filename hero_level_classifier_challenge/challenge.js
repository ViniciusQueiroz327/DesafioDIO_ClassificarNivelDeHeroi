let player = [
    ["ImDeadWarrior", 9500],
    ["Losted", 8500],
    ["Leaker", 7500]
]

player.forEach((line) => {
    let name = line[0]
    let score = line[1]

    if(score <= 1000 ) {
        console.log("The player " + name + " is Iron!")
    }
    else if(score >= 1001 && score <= 2000) {
        console.log("The player " + name + " is Bronze!")
    }
    else if(score >= 2001 && score <= 5000) {
        console.log("The player " + name + " is Silver!")
    }
    else if(score >= 5001 && score <= 7000) {
        console.log("The player " + name + " is Gold!")
    }
    else if(score >= 7001 && score <= 8000) {
        console.log("The player " + name + " is Platinum!")
    }
    else if(score >= 8001 && score <= 9000) {
        console.log("The player " + name + " is Diamond!")
    }
    else if(score >= 9001 && score <= 10000) {
        console.log("The player " + name + " is Ascendant!")
    }
    else if(score >= 10001 && score <= 11000) {
        console.log("The player " + name + " is Immortal!")
    }
    else {
        console.log("The player " + name + " is Radiant!")
    }
})