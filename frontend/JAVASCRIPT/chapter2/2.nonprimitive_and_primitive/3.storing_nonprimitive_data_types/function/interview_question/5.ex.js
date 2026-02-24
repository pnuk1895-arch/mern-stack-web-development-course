// IIFE OUTPUT BASED QUESTION

// (function (x){
  
//      return (function(y)
//          {console.log(x)})
//             (2)
   

//  })(4)

function fun(x){
  return function sum(Y){
    console.log(x)
  }
}
let myfunction=fun(1234)
myfunction()


