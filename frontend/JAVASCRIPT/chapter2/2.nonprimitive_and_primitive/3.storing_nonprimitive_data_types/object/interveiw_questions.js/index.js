let obj = {
    a: "one",
    b: "two",
    a: "three",
    a: "four",
    a: "five"
}


let json=JSON.stringify(obj)
// console.log(typeof json)

//if we have to convert json string back to java script object
let jsonse=JSON.parse(json)
console.log(typeof jsonse)
