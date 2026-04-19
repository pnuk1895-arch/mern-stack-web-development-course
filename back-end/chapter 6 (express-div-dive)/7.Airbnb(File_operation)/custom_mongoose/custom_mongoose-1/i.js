

// In JavaScript, a class is a template or "blueprint" used for creating objects.

// Constructor Method: A special method named constructor() that runs automatically when a new object is created. It is typically used to initialize object properties.

const fs=require("fs")
const path=require("path")

class Home
{
        constructor(location,price,rating)
    { 
        this.location=location 
        this.price=price  
        this.rating=rating  
    }

    // define a method  that you want in your object

    save()
    {
        const filepath=path.join(__dirname,"./database/registerData.json")
        const jsonData=JSON.stringify(this)
        fs.writeFile(filepath,jsonData,(error)=>{
            if(error){
                console.log(error)
            }
            else{
                console.log("file saves successfully")
            }
        })//time taking task
        
        
    }
    
    static fetchAll()
    {
        return registerData.json
    }




}
const obj1=new Home("delhi",5000,10)
console.log(obj1)
obj1.save()
console.log("you are right sir")
