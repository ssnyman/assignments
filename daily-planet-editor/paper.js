/*
This code contains only syntax and code style problems. The logic of the code works,
so DO NOT change the functionality of anything in here.

In short, you shouldn't need to add your own statements anywhere,
just fix the existing ones.
*/


// Written by Kent, Clark


// function addtwo(num1, num2) {
//     return num1 + num2
// }

// console.log(addtwo(1, 3))
// console.log(addtwo('red', 'blue'))
// console.log(addtwo(true, ['blue']))



var enemies = ["Lex", "Batman", "Darkseid", "Brainiac", "General Zod", "Doomsday"];

function whoWins(isThereKryptonite,enemy_name) {
    if (!isThereKryptonite) {
        return "Superman beats "+ enemy_name +", of course";
    }

    else {
        return "Depends on how quick Superman can get rid of the Kryptonite. "+ enemy_name +" could possibly win this one.";
    }
}

for (var i = 0; i < enemies.length; i++) {
    var is_there_kryptonite;
    if (i % 2 === 0) {
        is_there_kryptonite = true;
    } else {
        is_there_kryptonite = false;
    }
    console.log(whoWins(is_there_kryptonite,enemies[i]));
}

function howAttractedIsLoisLaneToMe () {
    // 1 is not at all attracted, 10 is "super" attracted...
    return Math.floor((Math.random() * 10) + 1);
}

console.log(howAttractedIsLoisLaneToMe());

var clarkKent = true;
var superman = false;

while (clarkKent) {
    console.log("I'm just a nerdy columnist");
    var phoneBoothQuickChange = Math.random();
    if (phoneBoothQuickChange >= 0.5) {
        clarkKent = false;
        superman = true;
    }
}