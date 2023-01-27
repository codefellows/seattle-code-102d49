// anatomy of a function

// DECLARING/DEFINING A FUNCTION
// function functionName(parameters){code to execute}

// let functionName = function(parameters){code to execute}

// INVOKE/CALL
// functionName();

function addTwoNumbers(num1, num2){
  return num1 + num2;
}

let addTwoNumbers = function(num1, num2){
  return num1 + num2;
}

// STRUCTURE OF LOOPS

// while(){}
// while (this evaluates to TRUE){execute this code}

let isCorrect = false

while (!isCorrect){
  let response = prompt("Did you have a good week?")
  if (response == 'yes'){
    console.log("Heck yeah!!");
    isCorrect = true;
  }
}

// for(initial value; condition to evaluate; increment){}


