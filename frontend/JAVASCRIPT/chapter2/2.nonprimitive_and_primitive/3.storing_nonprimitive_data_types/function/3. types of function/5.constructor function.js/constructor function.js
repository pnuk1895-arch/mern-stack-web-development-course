// Constructor Functions

// construtor function is like a normal function which is automatically call  internally by the new keyowrd during the object creation.

// Constructor functions are generally used as templates or blueprint to create multiple similar type of  objects easily.

//example:Object Type Person
function calculator(name,rollno,grade,section)
{   this.name=name
    this.rollNo=rollno
    this.grade=grade
    this.section=section
     return(`hello ${this.name}`)
   
}
console.log
console.log(new calculator("priyanshu",24,12,"A"))


