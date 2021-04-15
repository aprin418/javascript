console.log(5+5);

console.log("I don't like anchovies");

let age = "30";

console.log(age);

console.log(parseInt(age));

let name = "Aaron";

console.log(name);

console.log(name.replace("a", "A"));

console.log(5===5);

let doesEqual = 5===5;
console.log(doesEqual);

let stopLight = "red";

if (stopLight === "green") {
    console.log("GO!");
} else if (stopLight === "red") {
    console.log("STOP!");
}    else {
        console.log("Slow Down");
};

let count = 0;

while(count !== 10) {
    console.log(count);
    count ++;
};

let countDown = 10;

while(countDown >= 0) {
    console.log("Countdown:", countDown);
    countDown--;
};

countDown = 5;

for(let i=0; i < countDown; i++) {
    console.log(i)
};