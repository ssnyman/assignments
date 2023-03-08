// 1a) write a function that returns the sum of two numbers - throw an error if either argument is not of the data type number //
function sum(x, y) {
    if (x === 'number' && y === 'number') {
        return x + y
    } else 
        throw new Error('Mistake - enter numbers only.')
}

// 3b) call the function inside a 'try' block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error. //
