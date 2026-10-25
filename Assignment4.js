
console.log("-- Multiplication Table of 5 --");

for (let i = 1; i <= 5; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}

console.log("-- First number > 10 divisible by 6 --");

let num = 11;

while (true) {
    if (num > 10 && num % 6 === 0) {
        console.log("Found: " + num);
        break;
    }
    num++;
}

let i = 0;

do {
    i++;

    if (i % 2 === 0) {
        continue;
    }

    // Odd numbers are processed here.
} while (i < 5);
