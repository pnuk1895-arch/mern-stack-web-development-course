//first difference declaration
//we can redeclare the same variable with var in same scope but let and const can't redeclare in the same scope

//example1:run this program using "var" to see it

// var a=10
// var a=11

// console.log(a)
// result:using var we can declare variable through same variable name and without var

//example: run this program using "let" to see it

let a=10
let a=12
console.log(a)
// result:its give the error because let not redeclare same variable with same name 

//example: run this program using "const" to see it

// const a=12
// const a=40
// console.log(a)
// result: It's give the error because const not redeclare same variable with same name.