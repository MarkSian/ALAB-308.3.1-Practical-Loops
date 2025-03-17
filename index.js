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