// PRELIM
// Write a for loop that prints to the console the numbers 0 through 9
for (var i = 0; i <= 9; i++) { 
    console.log(i)
}

// Write a for loop that prints to the console 9 through 0
for (var i = 9; i >= 0; i--) {
    console.log(i)
}

// Write a for loop that prints these fruits to the console.const fruit = ["banana", "orange", "apple", "kiwi"]
const fruit = ["banana", "orange", "apple", "kiwi"]

for (var i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}


// BRONZE
// Write a for loop that will push the numbers 0 through 9 to an array.
const newArray = []

for (var i = 0; i < 1; i++) {
    for (var j = 0; j < 10; j++) {
        newArray.push(j);
    }
    console.log(newArray)
}

// Write a for loop that prints to the console only even numbers 0 through 100.
for (var i = 0; i <= 100; i ++){
    if ([i] % 2 === 0)
        console.log(i)
}

// Write a for loop that will push every other fruit to an array.

const fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
const otherFruit = []

for (var i = 0; i < fruits.length; i++){
    if (i % 2 === 0) {
        otherFruit.push(fruits[i])
        console.log(otherFruit)
    }
}


// SILVER