/* Part 1: Fizz Buzz */
// Accomplish The Following:
// 1) Loop through all numbers from 1 to 
// 2) If a number is divisible by 3, log "Fizz"
// 3) If a number is divisible by 5, log "Buzz"
// 4) If a number is divisible by both 3 and 5, log "FizzBuzz"
// 5) If a number is not divisible by either 3 or 5, log the number

// We will need a for loop, if statements, else if statements, and else statements.
// operators we need: modulo operator and the === operator

for (let i = 1; i <= 100; i++) {
    // if statement checking if i is divisible by 3 and 5, if it is, log "FizzBuzz"
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i}: "FizzBuzz"`);
        // else if statement checking if i is divisible by 3, if it is, log "Fizz"
    } else if (i % 3 === 0) {
        console.log(`${i}: "Fizz"`);
    } else if (i % 5 === 0) {
        // else if statement checking if i is divisible by 5, if it is, log "Buzz"
        console.log(`${i}: "Buzz"`);
    } else {
        console.log(i);
    }
}



/* Part 2: Prime Time */
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

let n = 11; // Example input

let current = n + 1;

while (true) {
    if (isPrime(current)) {
        console.log(`${current} is the next prime number after ${n}`);
        break;
    }
    current++;
}



/* Part 3: Feeling loopy */
const csvString1 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

const csvString2 = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

