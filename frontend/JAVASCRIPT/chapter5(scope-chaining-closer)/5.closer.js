// closure??

// A closure allows a function to remember and access variables from its outer scope, even after that outer function has finished execution.

// The outer function’s execution context is destroyed,but its lexical environment (the data) remains in memory(heap)as long as an inner function (closure) is still using it.


//Example 1 — Basic Closure
function outer() {
  let count = 0; // variable in outer function

  function inner() {
    count++;  // inner function uses outer variable
    console.log(count);
  }

  return inner; // returning the inner function
}

let counter = outer(); // outer() finishes, but inner still remembers 'count'

counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3