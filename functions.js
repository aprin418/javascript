const professionals = ['👨🏽‍🏫', '👩‍🍳', '👨🏽‍🌾', '👨🏼‍⚖️'];
const numbers = [1, 66, 48, 9, 23, 19, 20, 66, 30];
const vowels = ['a', 'e', 'i', 'o', 'u'];
const teams = ['Lakers', 'Nets', 'Clippers', 'Mavericks'];
const storageUnit = ['art', 'pots', 'yearbook', 'shoes', 'lucky socks'];

function addNumbers(numbersArray) {
    let result =  0;

    for (i = 0; i < numbers.length; i++) {
        let total = numbersArray[i];
        result += total;
    }
    //result = result + temp;
    return result;
}

console.log(addNumbers(numbers));

const aaronObject = {
    name: "Aaron",
    location: "Georgia",
    team: "Patriots"
};

function teamName(object) {
    return object.team;
}

let result2 = teamName(aaronObject);
console.log(result2);

