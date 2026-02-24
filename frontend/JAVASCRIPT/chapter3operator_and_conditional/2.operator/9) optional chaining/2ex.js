let student= { Name:"priyanshu negi",
                "Roll No." : 34 ,
                address: { city:"Delhi",
                            state:"new delhi"
                         }
             }

console.log(student.address.city); //perfectly working
console.log(student.address.pincode)// undefined
console.log(student.contact?.city) //undefined
//bcuz that was stop our interpreter process on contact then give the output undefined of contact.
//optional chaining stop the interprater on that place where property not declared in the program due to this it wasn't give output error and that not push system on restarting consequences.