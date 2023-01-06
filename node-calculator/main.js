const readline = require("readline-sync");

// store first number (store)
var numberOne = readline.questionInt("Please enter your first number: ");

// store second number (store)
var numberTwo = readline.questionInt("Please enter your second number: ");

// enter operator (store)
var enterOp = readline.question("Please enter the operation to perform: add, sub, mul, div: ");

// function add two num (return result)
function addTwoNum(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

// function subtract two num (return result)
function subtractTwoNum(numberOne, numberTwo) {
    return numberOne - numberTwo;
}
// function multiply two num (return result)
function multiplyTwoNum(numberOne, numberTwo) {
    return numberOne * numberTwo;
}

// function divide two num (return result)
function divideTwoNum(numberOne, numberTwo) {
    return numberOne / numberTwo
}

// function definition of two numbers with operation
function myCalculator(numberOne, numberTwo, enterOp) {
    if (enterOp == "add") {
        console.log("When you add the first number: " + numberOne + " with the second number: " + numberTwo + " it gives you the result: " +
            addTwoNum(numberOne, numberTwo));
    }
    else if (enterOp == "sub") {
        console.log("When you subtract the first number: " + numberOne + " with the second number: " + numberTwo + " it gives you the result: " +
            subtractTwoNum(numberOne, numberTwo));
    }
    else if (enterOp == "mul") {
        console.log("When you multiply the first number: " + numberOne + " with the second number: " + numberTwo + " it gives you the result: " +
            multiplyTwoNum(numberOne, numberTwo));
    }
    else if (enterOp == "div") {
        console.log("When you divide the first number: " + numberOne + " with the second number: " + numberTwo + " it gives you the result: " +
            divideTwoNum(numberOne, numberTwo));
    }
    
}

myCalculator(numberOne, numberTwo, enterOp);
