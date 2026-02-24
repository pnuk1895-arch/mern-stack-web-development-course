// spread in function
let number=[1,2,3,4]
function fun(a,b,c)
{
    return a+b+c
}
fun(...number)
console.log(fun(...number))
