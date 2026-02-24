// 1) window object allow us to control the browser window

//width of the browser window
console.log(window.innerWidth);
//height of the brwoser window
console.log(window.innerHeight);
// // Open a new tab/window
window.open("https://google.com", "_blank");

// Close current window (works only if it was opened using JS)
window.close();



// Show popup dialogs

window.alert("Welcome to my site!");
let name = window.prompt("Enter your name:");
let confirmExit = window.confirm("Do you really want to exit?");



// Work with URL and navigation

// You can get or change the page’s URL using the location object.

console.log(window.location.href);//current URL
window.location.reload();//reload the page
window.location.assign("https://example.com");//navigate to a new page


window.addEventListener("resize", () => {
  console.log("Window resized:", window.innerWidth);
});


// 2)Modifying the webpage via window

//Change the title
window.document.title = "Welcome Shahid!";

//Change the background color
window.document.body.style.backgroundColor = "yellow";

// Change content of an element
window.document.getElementById("msg").innerText = "Hello from window!";

//Create a new element
let p = window.document.createElement("p");
p.innerText = "This is created using window object!";
window.document.body.appendChild(p);


