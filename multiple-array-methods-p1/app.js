var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

// 1. Returns list of everyone older than 18 //
function sortedAge(arr) {
    return arr.filter((adult) => {
        if (adult.age > 18)
            return adult
    });
}
console.log(sortedAge(peopleArray));

// 2. Sorted alphabetically and where //
function sortedAlph(arr) {
    return arr.sort((a, b) => {
        if (a.lastName < b.lastName) {
        return -1
        }
    });
}
console.log(sortedAlph(peopleArray));


// each name and age is embeded into a string that look like a <li> element //
function newLiArr(arr) {
    return arr.map((people) => {
        return `"<li>${people.firstName} ${people.lastName} is ${people.age}</li>"`
    });
}
console.log(newLiArr(peopleArray));