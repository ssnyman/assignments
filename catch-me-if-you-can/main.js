// 1a) write a function that returns the sum of two numbers - throw an error if either argument is not of the data type number //
function sum(x, y) {
    if (x === 'number' && y === 'number') {
        return x + y
    } else 
        throw new Error('Mistake - enter numbers only.')
}

// 1b) call the function inside a 'try' block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error. //
try {
    sum('1', '2')
} catch (err) {
    console.log(err)
}

// 2a) Given a user object, write a function called 'login' that takes a username and password as parameters. Throw an error if eithe of them dont match. Otherwise, log to the console 'login sucessful'. //
let user = {username: 'alex', password: '0000'}

function login(username, password) {
    if (username === 'alex' && password === '0000') {
        return console.log('Login successful!')
    } else throw new Error('Wrong username and/or password - try again!')
}

// 2b) cal the login function in a 'try' block - in one instance use the correct credentials, and in the other use the incorrect ones. //
try {
    login('alex', '0000')
} catch (err) {
    console.log(err)
}