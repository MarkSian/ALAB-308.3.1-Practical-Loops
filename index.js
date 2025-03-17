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
//log
// *no log response shown here. The log response is too long to display in this document. Please run node index.js in the terminal to see the log response.



/* Part 2: Prime Time */
// A function that checks if a number is prime. If the number is prime, the function will return true, if the number is not prime, the function will return false.
function isPrime(num) {
    // If statement that checks if the number is less than or equal to 1, if it is, return false
    if (num <= 1) return false;
    // If statement that checks if the number is 2, if it is, return true
    if (num === 2) return true;
    // If statement, using modulo, that checks if the number is even, if it is, return false.
    if (num % 2 === 0) return false;
    // For loop that checks if the number is divisible by any odd number less than the square root of the number, if it is, return false.
    // If the number is not divisible by any odd number less than the square root of the number, return true.
    // This is because if a number is not divisible by any odd number less than the square root of the number, it is prime.
    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

let n = 11; // Example input

let current = n + 1; // current is the number after n to be evaluated.

// While loop that checks if the current number is prime, if it is, log the current number as the next prime number after n.
// Break the loop after the next prime number is found.
while (true) {
    if (isPrime(current)) {
        console.log(`${current} is the next prime number after ${n}`);
        break;
    }
    current++;
}

// Log
// 13 is the next prime number after 11



/* Part 3: Feeling loopy */

// csvString1 and csvString2 are two strings that represent parsed csv data. The data is seperated by commas and new lines.
// these const will be used in the parseCSV function.
const csvString1 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

const csvString2 = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

// will evaluate csvString1 and csvString2 as csv. The function will log each row of the csv to the console when all 4 cells are present.
function parseCSV(csv) {
    // An empty string to store the current word to be placed in a cell
    let currentCell = '';
    // An empty array to store the current row
    let currentRow = [];
    // Loop through each character in the csv string
    for (const char of csv) {
        // If statement that checks if the character is a comma, if it is, push the current cell to the current row and reset the current cell
        if (char === ',') {
            // Push the current cell to the current row
            currentRow.push(currentCell);
            // Empties the current cell
            currentCell = '';
            // Else if statement that checks if the character is a new line.
        } else if (char === '\n') {
            // Push the current cell to the current row
            currentRow.push(currentCell);
            // Destructure the current row into 4 cells
            const [cell1, cell2, cell3, cell4] = currentRow;
            // Log the 4 cells to the console
            console.log(cell1, cell2, cell3, cell4);
            // Empty the current row
            currentRow = [];
            // Empty the current cell
            currentCell = '';
            // Else statement that adds the character to the current cell. Basically if it does not encounter an "," or "/n" it will add the character to its respective cell.
        } else {
            currentCell += char;
        }
    }
    // If statement that checks if the current cell is not empty, if it is not, push the current cell to the current row
    if (currentCell) currentRow.push(currentCell);
    // If statement that checks if the current row has 4 cells, if it does, destructure the current row into 4 cells and log them to the console.
    if (currentRow.length === 4) {
        const [cell1, cell2, cell3, cell4] = currentRow;
        console.log(cell1, cell2, cell3, cell4);
    }
}

// Call the parseCSV function with csvString1 and csvString2 as arguments
parseCSV(csvString1);
parseCSV(csvString2);

// Log
// ID Name Occupation Age
// 42 Bruce Knight 41
// 57 Bob Fry Cook 19
// 63 Blaine Quiz Master 58
// 98 Bill Doctor’s Assistant 26
// Index Mass (kg) Spring 1 (m) Spring 2 (m)
// 1 0.00 0.050 0.050
// 2 0.49 0.066 0.066
// 3 0.98 0.087 0.080
// 4 1.47 0.116 0.108
// 5 1.96 0.142 0.138
// 6 2.45 0.166 0.158
// 7 2.94 0.193 0.174
// 8 3.43 0.204 0.192
// 9 3.92 0.226 0.205
// 10 4.41 0.238 0.232