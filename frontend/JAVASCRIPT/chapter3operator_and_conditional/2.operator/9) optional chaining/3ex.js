//combination of nullish_coalescing and optional chaining
let student={ name:"priyanshu negi",
              "roll no.": 34,
            address:{ city:"delhi",
                     State:"new delhi"
                    }
}
 
console.log(student.contact?.city??"unknown")