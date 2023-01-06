var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


// Remove the last item from the vegetable array.
vegetables.pop();
// console.log(vegetables)

// Remove the first item from the fruit array.
fruit.shift();
// console.log(fruit)

// Find the index of "orange"
let indexOrange = fruit.indexOf("orange");
// console.log(indexOrange)

// Add that number to the end of the fruit array.
fruit.push("1");
// console.log(fruit)

// Use the length property to find the length of the vegetable array.
let length = vegetables.length;
// console.log(length)

// Add that number to the end of the vegetable array.
vegetables.push("3");
// console.log(vegetables)

// Put the two arrays together into one array. Fruit first. Call the new Array "food".
let food = fruit.concat(vegetables);
// console.log(food)

// Remove 2 elements from your new array starting at index 4 with one method.
food.splice(4, 2);
// console.log(food)

// Reverse your array.
food.reverse();
// console.log(food)

// Turn the array into a string and return it.
let stringFood = food.join();
console.log(stringFood)