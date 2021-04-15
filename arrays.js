const favoriteArtist = ["Bon Jovi", "Fall Out Boy", "Billy Joel", "Imagine Dragons", "Walk The Moon"];

const randomEmojis = [];

const theDevLeague = ["Aaron", "Paul", "Brianna", "Brandon", "Thomas", "Maurice", "Evan", "Amanda"];

const my2DArray = [[2, 4, 6, 8], [20, 40, 60, 80]];

const arrayConcat = favoriteArtist.concat(theDevLeague);

const animals = [""];

const cars = [""];

const professionals = [""];

const numbers = [1, 5, 7, 88, 19];

const teams = ["Patriots", "Falcons", "Bucaneers", "Browns", "Panthers"]

// Methods
//let animalLength = animals.length; 
//const carsAndProfessionals = cars.concat(professionals);
let animalLength = animals.length;
console.log(animalLength);
// 5
const carsAndProfessionals = cars.concat(professionals);
console.log(carsAndProfessionals);
// ["🚗", "🚙", "🏎", "🚕", "🚓", "👨🏽‍🏫", "👩‍🍳", "👨🏽‍🌾", "👨🏼‍⚖️"]
console.log(theDevLeague.indexOf('Brianna Giorgi'))
// 6
console.log(theDevLeague);
// ["Paula Bauerman", "Brandon Hall", "Thomas Duong", "Paul Knick", "Evan Woodworth", "Aaron Prince", "Brianna Giorgi", "Maurice Chevez", "Amanda Posey"]0: "Paula Bauerman"1: "Brandon Hall"2: "Thomas Duong"3: "Paul Knick"4: "Evan Woodworth"5: "Aaron Prince"6: "Brianna Giorgi"7: "Maurice Chevez"8: "Amanda Posey"length: 9__proto__: Array(0)
console.log(theDevLeague[6]);
// "Brianna Giorgi"
console.log(theDevLeague.indexOf('brianna giorgi'));
// -1
console.log(professionals.pop());
// "👨🏼‍⚖️"
console.log(professionals);
//  ["👨🏽‍🏫", "👩‍🍳", "👨🏽‍🌾"]
console.log(professionals.push('👨🏼‍⚖️'));
// 4
console.log(professionals);
// ["👨🏽‍🏫", "👩‍🍳", "👨🏽‍🌾", "👨🏼‍⚖️"]
console.log(cars.includes('Rome'));
// false
console.log(cars.includes('🚓'));
// true
console.log(numbers);
//  [1, 66, 48, 9, 23, 19, 20, 66, 30]
console.log(numbers.toString());
// "1,66,48,9,23,19,20,66,30"
let stringOfNumbers = numbers.toString();
console.log(stringOfNumbers);
"1,66,48,9,23,19,20,66,30"
console.log(stringOfNumbers.split(','));
// ["1", "66", "48", "9", "23", "19", "20", "66", "30"]
let moreStrings = "1-66-48-9-23-19-20-66-30";
console.log(moreStrings.split('-'));
// ["1", "66", "48", "9", "23", "19", "20", "66", "30"]

for (let i = 0; i < teams.length; i++) {
    let teamElement = teams[i]; {
    console.log(i, teamElement + " Stadium");
    }
};

for (let i = 0; i < numbers.length; i++) {
    console.log(i, numbers[i]);
};

for (let i = numbers.length; i >= 0; i--) {
    let countDown = numbers[i]; {
        console.log(i, countDown);
    };
};

for (let i = 0; i < teams.length; i++) {
    let teamHype = teams[i]; {
        console.log("Team " + teamHype + " Rules!");
    };
};