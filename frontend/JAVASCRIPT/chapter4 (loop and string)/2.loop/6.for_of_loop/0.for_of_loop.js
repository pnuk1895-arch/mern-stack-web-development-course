//create a object and eccess each element using for,while,do while ,and for...of loop

let obj={
    name:"Priyanshu Negi",
    "Roll no.":23,
    class:"12th",
    stream:"Humanities",
    address:{ "House no.":134,
            "street no.":5,
            area:"west vinod nagar",
            city:"delhi",
            pincode:110092
          }
}


for(let [key,values] of Object.entries(obj) )

{
    console.log(person)
}

//generally we don't apply "for of loop" on object because "for of loop" only work on iteriable object.

//but of iterable we want to apply then, we