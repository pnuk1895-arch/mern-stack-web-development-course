//In the contrast of global scope

// const a=1 //using const
// var a=4  // using var
let a=9  //using let
// console.log(a)


// global scope

function fun()
{ //local scope


    console.log(a)
    
    {    //block scope 


        console.log(a)
    }
}
fun()

