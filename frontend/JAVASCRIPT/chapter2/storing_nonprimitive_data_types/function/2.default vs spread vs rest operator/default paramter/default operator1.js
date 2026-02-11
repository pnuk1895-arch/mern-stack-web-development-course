function sum(...num)
{    let sum=0
    for(item of num)
    {
        sum=sum+item
    }
     return sum
}
let result=sum(9,2,3,4,5,6)
console.log(result)
