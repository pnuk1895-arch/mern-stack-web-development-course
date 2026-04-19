const fs=require("fs")
const path=require("path")


class Home
{  
    //This is a contruction function which call automacially by the new keyword whenever object is create.
    // new keyword call the constructor function to insisalize its empty object.
    // so in contructor function we have to write a code that will be insisalize the object.
      constructor(rating,price,location)
      {
            this.rating=rating
            this.price=price
            this.location=location
      }


      save()
      {
           let filePath=path.join(__dirname,"./database/RegisterData.json")
           let data=json.stringfy(this)
           fs.writeFile(filePath,data,(error)=>{
                if(error)
                {
                    console.log(error)
                }
                else
                {
                    console.log("data is written in the file")
                }

           })
             
      }

}
let object=new Home(8,1100,"delhi")
console.log(object)



