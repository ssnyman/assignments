// 1. turn array of numbers into total of all numbers //
function total(arr) {
    return arr.reduce((final, num) => {
        final += num
        return final
    }, 0)
}
console.log(total([1, 2, 3])); // 6


// 2. array of numbers into string
function stringConcat(arr) { 
    return arr.reduce((acc, cur) => {
        return acc + "" + cur
    })
}
console.log(stringConcat([1, 2, 3])); // "123"


// 3. turn an array of voter objects into count of how many voted //
function totalVotes(arr) {
    return arr.reduce(function (final, voter) {
        if (voter.voted) {
            final++
        }
        return final
    }, 0)
}

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters)); // 7


// 4. how much would it cose to buy everything at once //
function shoppingSpree(arr) {
    return arr.reduce(function (final, item) {
        final = final + item.price
        return final
    }, 0)
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

 console.log(shoppingSpree(wishlist)); // 227005


// 5. given an array of arrays, turn into single array //
function flatten(arr) {
    return arr.reduce((acc, cur) => acc.concat(cur), [])
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];


// 6. return object representing results of vote //
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
    return arr.reduce((acc, cur) => {
        if (cur.age <= 25 && cur.age >= 18 && cur.voted)
            acc.numYoungVotes++
        if (cur.age <= 25 && cur.age >= 18)
            acc.numYoungPeople++
        if (cur.age <= 35 && cur.age >= 26 && cur.voted)
            acc.numMidVotesPeople++
        if (cur.age <= 35 && cur.age >= 26)
            acc.numMidsPeople++
        if (cur.age <= 55 && cur.age >= 36 && cur.voted)
            acc.numOldVotesPeople++
        if (cur.age <= 55 && cur.age >= 36)
            acc.numOldsPeople++
        
        return acc
    }, {
        numYoungVotes: 0,
        numYoungPeople: 0,
        numMidVotesPeople: 0,
        numMidsPeople: 0,
        numOldVotesPeople: 0,
        numOldsPeople: 0
    })
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
numYoungPeople: 4,
numMidVotesPeople: 3,
numMidsPeople: 4,
numOldVotesPeople: 3,
numOldsPeople: 4
}
*/