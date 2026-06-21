// how scope chaining is possible

// as we know that   When JavaScript executes code, it creates an execution context for every each scope 

//Each execution context has its Lexical Environment which contains:variables defined in that scope and a reference to its outer(parent) lexical  environment 

// This connection creates a chain called scope chain that js uses  to find a variable

// note aparat from lexical environment we have this and meta data in each context

// example

let x = 10;

function outer() {
  let y = 20;

  function inner() {
    let z = 30;
    console.log(x, y, z);
  }

  inner();
}

outer();


// explanation

// Behind the scenes:When JS runs this code:

// Step 1️⃣ — Global Execution Context created in stack

// Stores x, outer

// has a refrence to  null (because global has no parent)




// Step 2️⃣ — outer() Execution Context created

// Stores y, inner

// Has a reference to Global Environment




// Step 3️⃣ — inner() Execution Context created

// Stores z
// Has a reference to outer()’s environment

// Scope Chain formed like this:
// inner → outer → global



// note:each execution context has lexical environment,this and some internal meta data
// each lexical environment has variable envirnment and refrence variable


