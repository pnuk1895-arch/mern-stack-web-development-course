//5)callback function:A callback function is a java script  function that is passed as an argument to another function,and that function calls it later (or “calls it back”)  at a specific time.


function fun(send){
      return send("priyanshu")
}

function greet(name)
{
    let result=(`hello ${name}`)
    return result
   
}
fun(greet)
// console.log(fun(greet))
// i was make firstly function greet and then i was make function fun above to greet 