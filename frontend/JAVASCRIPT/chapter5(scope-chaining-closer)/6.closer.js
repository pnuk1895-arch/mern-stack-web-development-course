//how closures is possible

// 1) Normally, variables are destroyed when a function ends 

//Example:

function test() {
  let x = 10;
  return function name() {
    console.log("hello")
  }
}
let namefunction = test();
namefunction()
// after test() ends, x is gone
// Here, once test() finishes, x is removed from memory —because nothing is using it anymore.




//but if that variable is needed in inner function than The outer function’s execution context is destroyed(as usuall) but its lexical environment(the data) remains in memory(heap) as long as an inner function (closure) is still using it.