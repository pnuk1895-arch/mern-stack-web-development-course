//Arrays need array methods → stored in Array.prototype

//example:push(),pop(),map(),filter(),reduce()


let arr=[1,2,3,4,5,6]

console.log(arr.push())
console.log(arr.pop())
console.log(arr.slice())
console.log(Array.prototype);
console.log(arr.__proto__)



//Its internal prototype chain is:
//arr → Array.prototype → Object.prototype → null