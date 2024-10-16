class gameClasses {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attackType = null;

    attack() {
        switch(this.type) {
            case "Mage":
                this.attackType = "magic"
                break
            case "Warrior":
                this.attackType = "a sword"
                break
            case "Monk":
                this.attackType = "martial arts"
                break
            case "Ninja":
                this.attackType = "some shurikens"
                break
            default:
                return `
                    Invalid type for player ${this.name}!
                `
        }

        return `
            The player ${this.name} is a ${this.type} and attacked using ${this.attackType}!
        `
    }
}

let Losted = new gameClasses("Losted", "20", "Mage");
console.log(Losted.attack())

let Leaker = new gameClasses("Leaker", "19", "Warrior");
console.log(Leaker.attack())

let ImDeadWarrior = new gameClasses("ImDeadWarrior", "21", "Ninja");
console.log(ImDeadWarrior.attack())

let Thanatos = new gameClasses("Thanatos", "27", "Monk");
console.log(Thanatos.attack())

let InvalidExample = new gameClasses("InvalidExample", "50", "Soldier");
console.log(InvalidExample.attack())