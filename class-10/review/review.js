// anatomy of a function

// Declaring/Defining a function - creating it

//                  optional: extra information the function needs to do its job
// function functionName(parameters){code to execute}

function addTwoNumbersHere(num1, num2){
  return num1 + num2;
}

// Function Expression --> yes it's a function, be careful with it
// let functionName = function(parameters){code to execute}

let addTwoNumbersThere = function(num1, num2){
  return num1 + num2;
}

// function expressions can easily be reassigned
addTwoNumbersThere = "not a function anymore!";

// INVOKE/CALL - use it
// functionName(arguments, if expected);        

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

// for(initial value; condition to evaluate; increment){execute this code}

for (let i = 0; i < 10; i++){
  console.log(i);
}


