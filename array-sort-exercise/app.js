// SMALLEST TO LARGEST NUMBER //
function leastToGreatest(arr){
    return arr.sort((a, b) => a - b)
}
console.log(leastToGreatest([ 1, 3, 5, 2, 90, 20 ]));


// LARGEST TO SMALLEST NUMBER //
function greatestToLeast(arr){
    return arr.sort((a, b) => b - a)
}
console.log(greatestToLeast([ 1, 3, 5, 2, 90, 20 ]));


// SHORTEST TO LONGEST STRING //
function lengthSort(arr){
    return arr.sort((a, b) => {
        if (a.length < b.length) {
            return -1
        }
    })
}
console.log(lengthSort([ "dog", "wolf", "by", "family", "eaten" ]));


// SORT ARRAY ALPHABETICALLY //
function alphabetical(arr){
    return arr.sort((a, b) => {
        if (a < b){
            return -1
        }
    })
}
console.log(alphabetical([ "dog", "wolf", "by", "family", "eaten" ]));


// SORT BY AGE //
function byAge(arr){
    return arr.sort((a, b) => {
        if (a.age < b.age){
            return -1
        }
    })
}
console.log(byAge([
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]));