// 2)Function Expression:when we  defined the function with anonymos function and assign it to the variable.
//Syntax:
const greet = function() {
  console.log("Hello, Shahid!");
};

//function call
greet(); 


//some imp points about function expression

// behaviour of function expression depends on how the function expresstion is declared 

// if it is declared with var then it will be hoisted and intialized with undefined 
// if it is declared with let and const then it will be hoisted but unintialized(remains In TDZ)
