
const fs=require("fs")
const path=require("path")


class registerHome
{
      //constructor fucntion
      constructor(homeName,rating,location)
      {
         this.homeName=homeName
         this.rating=rating
         this.location=location
      }

      //fucntion 

      save()
      {
           const  filepath=path.join(__dirname,"./","database","homeRegistraion.json")
            const data=JSON.stringify(this)
            fs.writeFile(filepath,data,(error)=>{
                 if(error)
                  {
                        console.log(error)
                  } 
                  else{
                    console.log("successfull") 
                  } 
            }) 
            
            console.log("you are right")
      }


}

let object=new registerHome("4bhk",5,"delhi")
object.save()
console.log("you are right2")