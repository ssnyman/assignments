var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception() {
    let result = []

    for (let i = 0; i < people.length; i++){
        result.push(people[i]);
        for (let j = 0; j < alphabet.length; j++){
            result.push(alphabet[j]);
        }
    }
    console.log(result);
}
console.log(forception());