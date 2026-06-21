//callback function:A callback function is a function that you pass as an argument to another function,so that the receiving function can call it later when a certain task is done.


// Simple Definition
// Callback = Function passed as input → executed later.


// Why do we use callbacks?
// Because JavaScript is single-threaded, but we often need to perform tasks that take time (like timers, API calls, reading files).
// Instead of blocking the code, JS uses callbacks to run code after that task finishes.

function greet(name) {
    console.log("Hello " + name);
}

function processUser(name,callback) {
    callback(name); 
}

processUser("shahid",greet);

// here greet() is a callback function





