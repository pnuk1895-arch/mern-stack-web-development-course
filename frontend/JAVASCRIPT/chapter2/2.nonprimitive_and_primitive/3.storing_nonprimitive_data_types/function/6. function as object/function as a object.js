//in JavaScript, when you define a function, it’s actually treated as a  object That means it has properties and methods(call, apply, and bind etc) just like other objects.

//When you define a function:

function sum(num1,num2) {
  console.log(num1+num2);
  // console.log(greet.arguments) //return array of arguments
  // console.log(greet.name)
}

sum(1,2)

//Internally, JS creates a Function object — something like:

// greet={
//   name: "greet",
//   length: 2,
//   argument:[1,2],
//   prototype: { constructor: greet },
//   __proto__: Function.prototype,
//   //Internal Slots (hidden, not directly visible)
//   // [[Code]]: reference to function code
//   // [[Environment]]: scope where it was defined
//   // [[Call]]: internal method to execute
// }




