// // function functionName(parameters){code you want executed}

// function functionName(){
//   // code goes here
// }

// let theName = '';

function greetUser(){
  theName = prompt("What is your name?"); 
  console.log(theName);
  document.write("Hello " + theName);
  return theName;
}

greetUser();

function numberGuess(){
  let userInput = prompt("Guess a number between 1 & 10");
  console.log(userInput);
  
  let myNumber = 7;
  
  // if/else if/else -- CONDITIONAL LOGIC
  
  if (userInput == myNumber){
    document.write("You nailed my number!");
  } else if (userInput > myNumber){
    document.write(" That's too high");
  } else if (userInput < myNumber){
    document.write(" That's too low");
  } else {
    document.write(" I have no idea what you tried to do there...");
  }
}

numberGuess();

// let result = prompt("Gimme a number");
// console.log("The user response was: " + result);