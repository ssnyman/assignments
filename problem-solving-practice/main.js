/* Write a function that takes an array of numbers and returns the largest
DO NOT use Math.max() */

function largest(testArr) {
    let largestNum = testArr[0];
    for (let i = 0; i < testArr.length; i++){
        if (testArr[i] > largestNum) {
            largestNum = testArr[i];
        }
    }
    return largestNum;
}

console.log(largest([6, 13, 250, 3])); // => 250
console.log(largest([3, 5, 2, 8, 1])); // => 8
console.log(largest([-13, 40, 3, 0, 19, 22])); // => 40


/* Write a function that takes an array of words and a character and
returns each word that has a character present.
*/

function lettersWithStrings(strArr, input) {
    let words = [];
    for (let i = 0; i < strArr.length; i++){
        if (strArr[i].includes(input)) {
            words.push(strArr[i]);
        }
    }
    return words;
}

console.log(lettersWithStrings(["$hello!", "%%^%%", "test!"], "!")); // => ["$hello!", "test!"]
console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!")); // => ["C%4!", "Hey!"]
console.log(lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h"));  // => []

/* 
Write a function that takes num1 and num2 and returns whether
num1 is divisible by num2.
*/

function isDivisible(a, b) {
    if (a % b === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isDivisible(4, 2)); // true
console.log(isDivisible(9, 3)); // true
console.log(isDivisible(15, 4)); // false