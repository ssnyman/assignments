// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

function fiveAndGreaterOnly(arr) {
    return arr.filter(num => {
        if (num > 5)
            return num
    })
}
console.log(fiveAndGreaterOnly([3, 6, 8, 2])) // [6, 8]

