


const fs=require("fs")
const path=require("path")



class Home{

    constructor(location,price,rating)
    {   
        this.location=location,
        this.price=price,
        this.rating=rating

    }

    save()
    {
        let filePath=path.join(__dirname,"./databs/registerData.json")

        let Data=JSON.stringify(this)

        fs.writeFile(filePath,Data,error=>{
            if(error)
            {
                return error
            }
        })

    }

}


module.exports=Home