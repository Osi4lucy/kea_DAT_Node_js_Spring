// --------------------------------------
// Exercise 3 - Add numbers from string to float

var numberOne = "1.10";
var numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

// --------------------------------------
//var sum = (+numberOne) + (+numberTwo);
var newSum = Number(numberOne) + Number(numberTwo);
console.log(newSum);

// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

var numberOne = "1.10";
var numberTwo = "2.30";

var result = parseFloat(numberOne) + parseFloat(numberTwo);
console.log(result);

console.log(result.toFixed(2));
// --------------------------------------
// Exercise 5 - Decimals and average

var one = 10;
var two = 45;
var three = 98;

// Show in the console the avg. with 5 decimals

var average = one + two + three;
var average = average/3;
console.log(average.toFixed(5)); 

//Exercise 6 - Get the character by index

var letter = "abc"
// Get the character "c"
var newLetter = letter.charAt(2);
console.log(newLetter);
//-----------------------------
// --------------------------------------
// Exercise 7 - Replace

var fact = "You are learning javascript!";

// capitalize the J in Javascript

var newFact = fact.replace("j", "J");
console.log(newFact);

// --------------------------------------