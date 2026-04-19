


const fs=require("fs")
const path=require("path")



class Home{

    constructor(location,price,rating)
    {   
        this.location=location,
        this.price=price,
        this.rating=rating

    }

    save(callback)
    {
        let filePath=path.join(__dirname,"./database/registerData.json")

        let Data=JSON.stringify(this)

        fs.writeFile(filePath,Data,(error)=>{
            if(error)
            {
                callback(error)
            }
            else
            {
                callback(null)
            }
        })

    }

    fetch(callback)
    {
        let filePath=path.join(__dirname,"./database/registerData.json")

        fs.readFile(filePath,(error,data)=>{
            if(error)
            {
                callback(error)
            }
            else
            {
                callback("data fetch successfully")
            }
        })
    }

}

module.exports=Home