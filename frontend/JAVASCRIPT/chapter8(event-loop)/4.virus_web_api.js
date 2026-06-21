//what is browser api:it allow JavaScript (single-threaded) to use the browser’s internal multithreaded functionalities such as rendering, timers, networking, storage, etc

//JavaScript only CALLS these APIs; the actual work happens inside the browser threads.


// varius api-exposed by the browser


// 1)rendring thread:rendring of html document in to the web page is done by rendering thread of browser

// it create a tree like struture of a html document called dom tree

// browser provide dom api to modifi dom tree

// dom api 


document.createElement()

appendChild()

innerHTML

querySelector()



// 2)timer-thread:managing timer 

// api
setTimeout()

setInterval()

clearTimeout()

clearInterval()

requestAnimationFrame() ()//render timing

queueMicrotask() ()//microtask queue

Promise ()//microtask sheduling




// 3)netwrok thread:Making Network Calls

// fetch api

fetch()
request,reponse



// 4)Storage thread:Provides mechanisms for storing data locally in the browser.

// storage api
localStorage()
sessionStorage()


// 5)console thread:enables to give logging output

// console api


// url thread:handling url

// url api


// file thread:facilates reading and intracting with files

// file api 
