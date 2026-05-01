const path=require("path")
const Home=require("./mongoose")

let house1= new Home("villa","mumbai",10000,8)

house1.save((error)=>{
    if(error)
    {
        console.log(error)
    }
    else
    {
        console.log("data save successfully house1")
        // fetching the data 

        const homepath=path.join(__dirname,"./database/registerData.json")
        
        house1.fetch(homepath,(error,data)=>{
            if(error)
            {
                console.log(error)
            }
            else
            {
                let Jsondata=JSON.parse(data)
                console.log(Jsondata[0])
            }
        })
    }
})