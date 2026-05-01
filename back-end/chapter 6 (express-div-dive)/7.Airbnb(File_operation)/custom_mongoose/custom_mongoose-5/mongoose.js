
const fs=require("fs")
const path=require("path")

let userData=[]

class Home{
    constructor(home,location,price,rating)
    {
        this.home=home,
        this.location=location,
        this.price=price,
        this.rating=rating
    }

    save(callback)
    {
        // firstly we need to fetch a previous user data from the file and then we have to add pervious data as well as current user data in a array

        let filePath=path.join(__dirname,"./database/registerData.json")
        this.fetch(filePath,(error,savedata)=>{
            if(!error && savedata)
            {
                userData=JSON.parse(savedata)
            }
            userData.push(this)
            let JSOn_data=JSON.stringify(userData)
            fs.writeFile(filePath,JSOn_data,(error)=>{
                if(error)
                {
                    callback(error)
                }
                else
                {
                    callback(null)
                }   
            })
        })


    }

    fetch(Path,callback)
    {
        fs.readFile(Path,"utf-8",(error,data)=>
        {
            if(error)
            {
                callback(error,[])
            }
            else
            {
                callback(null,data)
            }
        

        })
    }


}



module.exports=Home