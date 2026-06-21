// what is prototype?

//Prototype is a built-in object where shared methods and properties are stored. Objects(function,array,object) automatically inherit from their prototype using a hidden link (__proto__).

//__proto__:it is a hidden property inside every created object which point to the prototype object

// whenever the object is created java script internally inherit the prototype object into the created object

//like this 

//student.__proto__=Object.prototype


// exmple

// example:

let student={
  name:"harsh",
  age:20,
  getname:()=>{
      return name
  }

}

console.log(student.__proto__)
console.log(Object.prototype)


//Why prototype is used?
//To save memory
//Instead of creating the same function inside every object, it stores it in one place that is prototype object