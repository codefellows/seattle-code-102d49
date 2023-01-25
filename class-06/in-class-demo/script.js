// COMMON COMMANDS YOU WILL USE

// alert("Hello world!"); // a pop-up box
// prompt("What user input do you want to give me?") // a way to get input from your user
// console.log("Where is the console?"); // print a message to the console
// document.write("HELLOOOOOOOOOO Everyone!"); // put something on your actual HTML page

// -----------------------------------

// DECLARING VARIABLES, keywords you'll use

// let <-- YES - changeable
// const <-- YES - not changeable
// var <-- NOT IN 102
// (nothing) <-- NOT IN 102

// DECLARE A VARIABLE AND ASSIGN IT VALUE WITH 1 EQUAL SIGN

const myName = "Kassie"; // constant variables will not/cannot be changed
console.log(myName);

// Declare a variable called mySpouse and assign it the value of a string "Trouble"
let mySpouse = "Trouble";
console.log(mySpouse);

// Kassie does something stupid
mySpouse = undefined; // reassign the value to be undefined, it has no value
console.log(mySpouse);

// I get remarried
mySpouse = "Someone else..."; // reassign the value to be someone else
console.log(mySpouse);

// --------------------------------------------------------------------------------

// DATA TYPES FOR 102 & Comparisons
// Numbers
// Strings --> text
// Boolean --> True OR False

// = means assigning value, NOT comparing
// == means loosely equivalent
// === means strictly equivalent

console.log(2); // this is a number - no quotation marks
console.log('2'); // this is seen as text
console.log(2 == '2'); // evaluates to TRUE - loosely equivalent - 2 & '2' are roughly the same
console.log(2 === '2'); // evaluates to FALSE - strictly equivalent - data type matters - 2 & '2' are not equal

// --------------------------------------------------------------------------------

// prompt user for some input, store that input in a variable to be used later
let usersName = prompt("What is your name?"); 
console.log(usersName);
document.write("Hello " + usersName);

let userInput = prompt("Guess a number between 1 & 10");
console.log(userInput);

let myNumber = 7;

// if/else if/else -- CONDITIONAL LOGIC

if (userInput == myNumber){
  document.write("You nailed my number!");
} else if (userInput > myNumber){
  document.write("That's too high");
} else if (userInput < myNumber){
  document.write("That's too low");
} else {
  document.write("I have no idea what you tried to do there...");
}


