
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
     
      save(callback)
      {   
        this.fetch((error,savedData)=>{
           let allData=[]
            if (!error && savedData) {
            allData= JSON.parse(savedData)  // convert string → array
            }

          allData.push(this)  
          const finalData=JSON.stringify(allData)  
            
            const  filepath=path.join(__dirname,"./","database","homeRegistraion.json")
              fs.writeFile(filepath,finalData,(error)=>{
                   if(error)
                    {
                        callback(error)
                    } 
                    else{
                      callback()
                    }
                  
              }) 
               
           })
           
      }

 fetch(callback)
 {
  const filePath=path.join(__dirname,"./","database","homeRegistraion.json")
     fs.readFile(filePath,"utf-8",(error,data)=>{
          if(error)
            callback(error,null)
          else{
            callback(null,data)
          }
     })  
 }

}

module.exports=registerHome