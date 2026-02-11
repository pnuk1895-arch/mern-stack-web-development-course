let student= { Name:"priyanshu negi",
                "Roll No." : 34 ,
                address: { city:"Delhi",
                            state:"new delhi"
                         }
             }

console.log(student.address.city); //perfectly working
console.log(student.address.pincode)// undefined
console.log(student.contact.city)//error
 //In this case optional chaining will use because "contact" didn't there and that give error that make a developers work difficult.
  //I will solve it in "2ex.js"