/* Write a function that takes a string as a parameter 
and returns the same string in all capital letters followed by all lowercase letters.
- capilizeAndLowercase("HelLo") // => "HELLOhello" */

function upperLower(string) {
    let word = string
    let upperCase = word.toUpperCase()
    let combo = upperCase.concat(word)
    return combo
}
console.log(upperLower("hello"))

/* Write a function that takes a string as a parameter 
and returns a number that is half the string's length, rounded down. */

function halfString(stringTwo) {
    let wordTwo = stringTwo.length
    let wordTwoValue = wordTwo / 2
    let result = Math.floor(wordTwoValue)
    return result
}
console.log(halfString("Hello"))
console.log(halfString("Hello World"))

/* Write a function that uses slice() and the 
other functions you've written to return the first half of the given string. */

function sliceString(stringThree) {
    let newWord = stringThree.slice(0, halfString(stringThree))
    return newWord
}
console.log(sliceString("Hello"))
console.log(sliceString("Hello World"))

/* Write a function that takes a string as a parameter and returns that 
string where the first half is capitalized and the second half is lowercase. */

function capLow(word) {
    let input = word.slice(0, halfString(word))
    let newInput = input.toUpperCase()
    return newInput + word.slice(newInput.length)
}
console.log(capLow("hello"))
console.log(capLow("hello world"))