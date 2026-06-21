//2) using constructor function

//what is constructor fucntion?

//function that call automatically during the object creation 

//so what ever the code we will write it will be execute but usefull to write a code that intialize the object 

// bcz behind the scene new call the constructor function by hoping that constrctor function will itilize the my created empty  object

function student(name,age,city)
{
   
     this.name=name
     this.age=age
     this.city=city
     // this.sayHi=()=>{
     //    console.log(`hi ${this.name}`)
     // }

}

student.prototype.sayHi=function(){
     console.log(`hi ${this.name}`)
}


let st1=new student("harsh",20,"delhi")
let st2=new student("dhuv",20,"mubai")

console.log(st1)
console.log(st2)
st2.sayHi()
console.log(st1.hasOwnProperty("name"))





// new keyword does internally:
// let obj = {};                            // 1 create empty object
// obj.__proto__ = Student.prototype;       // 2 set prototype
// Student.call(obj, "Shahid", 21);         // 3 run function with obj as this
// return obj;                              // 4 return created object