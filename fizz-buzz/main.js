function fizzBuzzCount() {
    let fizzBuzzCount = []
    let fizzCount = []
    let buzzCount = []
    let fizzBuzzArr = []
    // print 1 to 100
    for (let i = 1; i <= 100; i++) {
    // multiple of 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            fizzBuzzArr.push("fizzbuzz");
            fizzBuzzCount.push(i);
            console.log("fizzbuzz");
    // multiple of 3
        } else if (i % 3 === 0) {
            fizzBuzzArr.push("fizz");
            fizzCount.push(i);
            console.log("fizz");
    // multiple of 5
        } else if (i % 5 === 0) {
            fizzBuzzArr.push("buzz");
            buzzCount.push(i);
            console.log("buzz");
        } else {
            fizzBuzzArr.push(i);
            console.log(i);
        }
    }
    let total = {
        fizzbuzz: fizzBuzzCount.length,
        fizz: fizzCount.length,
        buzz: buzzCount.length,
    }
    console.log(fizzBuzzArr.join(""))
    console.log(total)
}

fizzBuzzCount()
