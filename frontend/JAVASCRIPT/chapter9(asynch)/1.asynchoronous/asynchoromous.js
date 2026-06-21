//JavaScript normally runs code synchronously because it is single-threaded, meaning it executes instructions one after another.

// But when a long-time task comes,like:setTimeout,API fetch,reading files,timers,heavy tasks comes then java script  does't do that task by itself 

//java script handover that long task to the browser using webapi


// JS continues running the next lines without waiting.
// When the background task completes, the result is returned via callback/promise through Event Loop.

//this  is called asynchronous execution because the result of long-running instructions does not appear in the same order in which it is written.JavaScript moves to the next line without waiting, and prints the result later when the task is finished



// example:

console.log("task1")
setTimeout(()=>{
    console.log("task2")
},2000)
console.log("task3")

