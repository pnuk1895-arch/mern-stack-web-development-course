let a = 10; // Global scope

function first() {
  let b = 20; // Function A scope

  function second() {
    let c = 30; // Function B scope

    console.log(a); // ✅ found in global scope
    console.log(b); // ✅ found in outer (first function)
    console.log(c); // ✅ found in local scope
    console.log(d); // ❌ not found anywhere
  }

  second();
}

first();