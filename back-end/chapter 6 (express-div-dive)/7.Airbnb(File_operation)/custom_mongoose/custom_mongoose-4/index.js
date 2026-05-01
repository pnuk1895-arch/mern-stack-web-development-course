const mongoose=require("./mongoose")

let object= new mongoose("delhi",3000,5)

object.save((error)=>{
    if(error)
    {
        console.log(error)
    }
    else
    {
        console.log("data save successfully")
        object.fetch((error,data)=>{
                if(error)
                {
                    console.log(error)
                }
                else
                {
                    console.log("fetch save successfully",data)
                }
            })
    }
})


// everything is fine but problem is that whenever we are trying to save current user data then pervious data has been replace.
// only current data is save but we want to all data that we be enter by any user.
    



