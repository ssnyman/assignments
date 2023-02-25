// turn array of numbers into total of all numbers //
function total(arr) {
    return arr.reduce((final, num) => {
        final += num
        return final
    }, 0)
}
console.log(total([1, 2, 3])); // 6

// array of numbers into string
function stringConcat(arr) { 
    return arr.reduce((acc, cur) => {
        return acc + "" + cur
    })
}
console.log(stringConcat([1, 2, 3])); // "123"

//