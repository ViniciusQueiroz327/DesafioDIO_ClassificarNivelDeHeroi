const isTrue = true

if(isTrue) {
    console.log("True")
}
else if(!isTrue) {
    console.log("False")
}
else {
    console.log("error")
}

// -------------------------------------------------------------- //

const fruit = "passionfruit"

switch(fruit) {
    case "strawberry":
        console.log(fruit + " juice")
        break
    case "banana":    
        console.log(fruit + " juice")
        break
    case "passionfruit": 
        console.log(fruit + " juice")
        break
    default:
        console.log("No juice at all")
        break
}