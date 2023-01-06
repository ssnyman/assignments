const readlineSync = require("readline-sync")


let heroName = readlineSync.question(`What's your name stranger? `)
console.log(`Welcome ${heroName}!`)

//Name is defined and initialized

let hero = {
    name: heroName,
    hp: 100,
    attack: 10,
    defense: 10,
}

//empty inventory initialized
let heroInventory ={
    potions: 0,
    tents: 0,
    cabins: 0,
    rocks: 0
}

//define loot table
let lootTable = [{
    item: "Potion",
    healValue: 10
}, {
    item: "Tent",
    healValue: 25
}, {
    item: "Cabin",
    healValue: 50
}, {
    item: "Rock",
    healValue: 0
}]

console.log("\n" + hero.name + " huh?!")
console.log("...")
console.log("...")
console.log("\nWell, my name's Ezekiel!")
console.log("...")
console.log("...")
console.log("Trigger:\nHey " + hero.name +", can you do me a favor?")
console.log("Trigger:\nI need you to patrol the far reaches of the North for me.")
console.log("You can kill and loot what you like!")
console.log("How does that sound?")


function printHeroStats(){
    console.log("\nHero: " + hero.name + "\nCurrent HP: " + hero.hp +"\nCurrent Items: ")
    console.log(heroInventory)
}

function menu(){
    baseQuestion = readlineSync.question('\nWhat would you like to do? (W - Walk, I - view Inventory, Q = Quit)');
    if (baseQuestion === "W" || baseQuestion === "w"){
        walk()
    } else if (baseQuestion === "I" || baseQuestion === "i"){
        displayInventory()
    } else if (baseQuestion === "Q" || baseQuestion === "q"){
        hero.hp = 0
        console.log("\nNobody like a quitter. Goodbye!\n")
    } else if (baseQuestion === "p" || baseQuestion === "P" || baseQuestion === "PRINT" || baseQuestion === "Print" || baseQuestion === "print"){
        printHeroStats()
    } else {
        console.log("(WRONG BUTTON, try again, W or I?")
        menu()
    }
}

function displayInventory(){
    if (heroInventory.potions + heroInventory.tents + heroInventory.cabins + heroInventory.rocks === 0){
        console.log("\nYou're pack is completely empty\n")
    } else {
        console.log("\nYou open your pack.\nInside you have:")
        console.log(heroInventory)
        let insideInvAction = readlineSync.questionInt("\nWould you like to use something?\nEnter 1 to use a potion.\nEnter 2 to use a tent.\nEnter 3 to use a cabin.\nEnter 4 to talk to a rock.\nEnter 5 to close the backpack.\nChoose an action 1 through 5 and press enter.\n")
        if (insideInvAction === 1){
            usePotion()
        } else if (insideInvAction === 2){
            useTent()
        } else if (insideInvAction === 3){
            useCabin()
        } else if (insideInvAction === 4){
            talkToRock()
        } else if (insideInvAction === 5){
            console.log("\nYou close up the bag and ponder your next move.\n")
        }
    }
}

function walk(){
    if (Math.floor(3 * Math.random()) < 1){
        console.log("\nYou've been attacked!")
        fightTime()
    } else {
        console.log(walkMsg1 [Math.floor( 10 * Math.random())])
    }
}

function fightTime(){
    let randomEnemy = Math.floor(3 * Math.random())
    
    let enemyDmgDealt
    let enemyDmgTaken    
    //function allowing for a random amount each time based on enemy dmg parameters
    function attacked(){
        enemyDmgDealt = Math.floor(Math.random() * (monsters[randomEnemy].maxDmg - monsters[randomEnemy].minDmg) + monsters[randomEnemy].minDmg);
    }
    //function allowing for a random dmg from player each time based on Hero's attack with a plus or minus 5 offset
    function attacks(){
        enemyDmgTaken = Math.floor(Math.random() * ((hero.attack + 5) - (hero.attack -5)) + (hero.attack - 5));
    }
    console.log("A giant " + monsters[randomEnemy].name + " approaches!")
    for(let i = 0; monsters[randomEnemy].hp > 0 && hero.hp > 0; i++){
        let fightCommand = readlineSync.question('\nWhat is your action?\nAttack (A)?\nRun (R)?\n')
        if (fightCommand === "A" || fightCommand === "a" || fightCommand === "attack" || fightCommand === "ATTACK" || fightCommand === "Attack") {
            attacks();
            console.log(i)
            if ( i === 0 ) {
                console.log("\nIt's on!\nYou attack the " + monsters[randomEnemy].name + " and deal " + enemyDmgTaken + " damage")
            } else {
                console.log("\nThe battle rages on!\nYou attack the " + monsters[randomEnemy].name + " and deal " + enemyDmgTaken + " damage")
            }
            monsters[randomEnemy].hp = monsters[randomEnemy].hp - enemyDmgTaken
            attacked();
            console.log("The " + monsters[randomEnemy].name + " lunges at you, dealing " + enemyDmgDealt + " damage.")
            hero.hp = hero.hp - enemyDmgDealt;
            if (hero.hp < 1){
                dead()
            } else if (monsters[randomEnemy].hp < 1){
                console.log("\nVictory! You defeated the " + monsters[randomEnemy].name + " with " + hero.hp+ " HP remaining.")
                let lootDecide = Math.floor(4 * Math.random())
                let itemDropped = lootTable[lootDecide].item
                console.log("Looks like the " + monsters[randomEnemy].name + " dropped a " + itemDropped + ".\nYou stash the " + itemDropped + " in your inventory")
                afterBattleHeal = Math.floor(Math.random() * (20 - 5) + 5)
                hero.hp = hero.hp + afterBattleHeal
                console.log("You feel your strength slowly recover as you regain " + afterBattleHeal + " hit points.\nYou now have " + hero.hp + " hit points.")
                if ( lootDecide === 0){
                    heroInventory.potions = heroInventory.potions + 1
                } else if (lootDecide === 1){
                    heroInventory.tents = heroInventory.tents + 1
                } else if (lootDecide === 2){
                    heroInventory.cabins = heroInventory.cabins + 1
                } else {
                    heroInventory.rocks = heroInventory.rocks + 1
                }
            }
        } else if (fightCommand === "R" || fightCommand === "r" || fightCommand === "Run" || fightCommand === "run" || fightCommand === "RUN"){
            let escape = Math.floor(2 * Math.random())
            if (escape < 1){
                console.log("You attempt to escape...  \nbut the monster blocks your path!")
                attacked();
                console.log("The " + monsters[randomEnemy].name + " lunges at you, dealing " + enemyDmgDealt + " damage.")
                hero.hp = hero.hp - enemyDmgDealt;                
                console.log("\nYour current HP @ " + hero.hp + "\n")
            } else {
                console.log("\nYou attempt to escape, and... \n!!!!!  VICTORY  !!!!! \n ...you escaped \n")
                monsters[randomEnemy].hp = 0;
                fightCommand = ""
            }
        } else {
            console.log("\nWHOOPS! That's not an option.\nAttack (A)? or Run (R)?\n")
        }
    }
    monsters[0].hp = 30
    monsters[1].hp = 40
    monsters[2].hp = 50
}

let monsters = [{
    name: "Rodan",
    hp : 30,
    minDmg: 1,
    maxDmg: 9
}, {
    name: "Wendigo",
    hp : 40,
    maxDmg: 14,
    minDmg: 4
}, {
    name: "Scylla",
    hp : 50,
    minDmg: 7,
    maxDmg: 19
}]

function useItem(){
    heal = Math.floor(Math.random() * (40 - 20) + 20)
}

const walkMsg1 = ["\nYou take some steps... \nThe icy wind burns your face... \nIt's so cold.", 
"\nYour feet heavily trudge along... \nYou ask yourself, why the hell did you agree to this...",
"\nA deafening scream drounds out the sound of the wind. \nYou wonder if something or someone just died in this hell..",
"\nYou briskley pick up the pace on this patrol. \nDamn you covered some good ground! \nNot many more legs like this and job will be done. \nEzekiel will be SO PROUD!",
"\nAnother small step for Ezekiel. \nWe've come so far.\n Gotta make it home!",
"\nYou come out of the clearing in and see a fog everywhere \nIt's crazy, you see something shiny... \nThen you remember you got a job to do.",
"\nYou take two steps and second guess all of your life's decisions thus far.",
"\nSo this is what early games were like? \nOH lawdy, we are having FUN!",
"\nWhen in doubt, keep patrolling.",
"\nAnother minute dredges by as you walk on forth like a good soldier. \nStarting to wonder if it will ever end. \nIt will.. \nI hope. \nEmbrace the suck."];

function stillPlaying(){
    let playAgain = readlineSync.question("\nWould you like to play again?");
    if (playAgain === "Y"){
        hero.hp = 100
        console.log(hero.hp)
        restart()
    } else if (playAgain === "N"){
        return ("Have a daring day!")
    } else {
        console.log("Pushed something wrong there, what do you want to do? Play again?");
        stillPlaying();
    }
}

function start() {
    while (hero.hp > 0){
        menu()
    }
}

function restart(){
    console.log("\nGet right back on that horse and make Ezekiel proud!\n")
    start()
}

start()

if (hero.hp < 0) {
    dead()
}






function dead(){
    console.log("\nLooks like your taking a permanent nap...\n");
    stillPlaying()
}