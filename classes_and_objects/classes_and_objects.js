class Cake {
    constructor(cakeBatterFlavor, fillingFlavor) {
        this.cakeBatterFlavor = cakeBatterFlavor;
        this.fillingFlavor = fillingFlavor;
    }

    toString() {
        return ` 
            A delicious ${this.cakeBatterFlavor} cake filled with ${this.fillingFlavor} flavor!
        `
    }
}

let birthdayCake = new Cake("vanilla", "strawberry")
console.log(birthdayCake.toString())

let marriageCake = new Cake("chocolate", "coconut")
console.log(marriageCake.toString())