// class is a blue print or discription of an object though which can create a mutiple similar type of an object

class student
{
    constructor(name,age)
    {
        //whatever the  data you want in your object write here
        this.name=name
        this.age=age
    }

    // what ever the function you want in your object  write here
    sayHi() {
        console.log(`hi ${this.name}`)
    }

    getname()
    {
        return this.name
    }

    getage()
    {
      return this.age
    }
}



let st1= new student("md shahid",24)
let st2= new student("md shahid",24)
let st3= new student("md shahid",24)
let st4= new student("md shahid",24)
let st5= new student("md shahid",24)
st1.sayHi()


// advantage

// method is not present in object instead it is present it's prototype
// object has only data