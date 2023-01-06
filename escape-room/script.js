/* Tell user their options:
Put hand in hole
Find key, or
Open door
Cannot open door without finding key first
Will die if hand is put in hole */

const readline = require("readline-sync");
const name = readline.question("What is your name? ");
let gameOver = false; // < game runs opposite of this condition
let key = false; // < user does not have key 

while (!gameOver) { // < loop runs while condt. is met

    let answer = readline.question(`Hello ${name}.
        You are locked in an unknown room.
        In order to escape, you must find a key to the door.
        There is a hole in the wall.
        Would you like to:
        [1] Put your hand in the hole?
        [2] Find the key?
        [3] Open the door? `
    );
    
    if (answer === "1") {
        console.log("You permanently escaped the room by death.");
    } else if (answer === "2") {
        key = true; // < user has key
        console.log("You found a key!");
    } else if (answer === "3" && key === true) {
        console.log("Congratulations! You have made a successful escape.");
        gameOver = true;
    } else if (answer === "3") {
        console.log("You need a key first!");
    } else {
        console.log("Lets play again.");
    }
}
