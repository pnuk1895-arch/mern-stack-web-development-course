// what is scope chaining

// Scope Chain —When JavaScript tries to find the value of a variable, it first checks in the current (local) scope, then moves to the outer scope, and continues outward until it reaches the global scope.This step-by-step process is called the Scope Chain.


// example:

const name = "Global";

function outer() {
  const name = "Outer";

  function inner() {
    const name = "Inner";
    console.log(name);  // Which "name" will this print?
  }

  inner();
}

outer();  // "Inner"


// explnation:
// JavaScript looks for variables in this order:

// 1. **Current scope** (inner function) → Found `name = "Inner"` ✓
// 2. If not found, check **outer scope** (outer function)
// 3. If not found, check **global scope**
// 4. If still not found → ReferenceError

// This is called the **Scope Chain**.