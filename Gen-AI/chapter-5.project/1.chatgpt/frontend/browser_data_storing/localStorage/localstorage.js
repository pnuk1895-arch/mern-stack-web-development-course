const arr = [1, 2, 3, 4];

// Save
localStorage.setItem('myArray', JSON.stringify(arr));

// Load
const savedArr = JSON.parse(localStorage.getItem('myArray'));

console.log(savedArr); // [1, 2, 3, 4]