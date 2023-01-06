// Loop through the following array and count how many "computers" there are. Log the final count:
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]

let computers = 0;

for (var i = 0; i < officeItems.length; i++) { 
    if (officeItems[i] === "computer") {
        computers += 1;
        console.log(computers)
    }
}


// Loop through the following array and console.log "old enough" if they are 18 or older, and "not old enough" if they aren't 18.
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
]
  
for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    var personName;
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        personName = peopleWhoWantToSeeMadMaxFuryRoad[i].name
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name+' is old enough to see Mad Max.')
    } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age <= 18) {
        personName = peopleWhoWantToSeeMadMaxFuryRoad[i].name
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name+' is not old enough to see Mad Max.')
    }
}