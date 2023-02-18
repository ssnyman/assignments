// Given an array of numbers, return a new array that has only the numbers that are 5 or greater //

function fiveAndGreaterOnly(arr) {
    return arr.filter(num => {
        if (num > 5)
            return num
    })
}
console.log(fiveAndGreaterOnly([3, 6, 8, 2]))


// Given an array of numbers, return a new array that only includes even numbers //

function evensOnly(arr) {
    return arr.filter(num => {
        if (num % 2 === 0)
            return num
    })
}
console.log(evensOnly([3, 6, 8, 2]))


// Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length / /

function fiveCharactersOrFewerOnly(arr) {
    return arr.filter(string => {
        if (string.length <= 5)
            return string
    })
}
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]))


// Given an array of people objects, return a new array that has filtered out all those who don't belong to the club //

function peopleWhoBelongToTheIlluminati(arr) {
    return arr.filter(illuminati => {
        if (illuminati.member === true)
            return illuminati
    })
}
console.log(peopleWhoBelongToTheIlluminati([
    {name: "Angelina Jolie", member: true},
    {name: "Eric Jones", member: false},
    {name: "Paris Hilton", member: true},
    {name: "Kayne West", member: false},
    {name: "Bob Ziroll", member: true}
]));


// Make a filtered list of all people who are old enough to see the Matrix //

function ofAge(arr) {
    return arr.filter(viewers => {
        if (viewers.age > 18)
            return viewers
    })
}
console.log(ofAge([
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kayne West", age: 16},
    {name: "Bob Ziroll", age: 100}
]));