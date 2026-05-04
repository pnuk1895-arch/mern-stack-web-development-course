
const fs=require("fs")
const path=require("path")

let userData=[]

class Home{
    constructor(body)
    {
        this.homeName=body.homeName,
        this.Location=bpdy.location,
        this.pricePerNight=body.pricePerNight,
        this.rating=body.rating,
        this.photourl=body.photourl
    }

    save(callback)
        {
            //first of all we have to fetch previus data and then previus data and current data we should save
            let  allData=[] 
            Home.fetchAll((error,savedData)=>{
                if(!error && savedData)
                allData=savedData
                
                    allData.push(this)

                const  filepath=path.join(__dirname,"../","dataBase","registerData.json")
                fs.writeFile(filepath,JSON.stringify(allData),(error)=>{
                    if(error)
                        {
                            callback(error)
                        } 
                        else{
                            callback(null)
                        }
                    
                }) 
            })
        }

    static fetchAll(callback)
    {      
        const filePath=path.join(__dirname,"../database/registerData.json")

            fs.readFile(filePath,"utf-8",(error,data)=>{
                if(error)
                callback(null,[])
        else if (!data.trim()) { //✅THIS IS THE FIX
        callback(null, [])
        }
        else{
                JSON.stringify(data)
                callback(null, JSON.parse(data))
        }
            }) 
    }

    
}



module.exports=Home
