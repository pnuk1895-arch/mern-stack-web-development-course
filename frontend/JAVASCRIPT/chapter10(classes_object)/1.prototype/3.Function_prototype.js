//function need function  method->stroed in Function.prototype 

// contains:call(),apply(),bind()
function fun()
{
     console.log("hello")
}

console.dir(fun)
console.log(fun.__proto__)
console.log(Function.prototype)


//Its internal prototype chain is:
// fun→ Function.prototype → Object.prototype → null