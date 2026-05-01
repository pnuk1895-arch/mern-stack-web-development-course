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
    }
})

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

    



//here problem is that fetch function immdiately call after the save but save fucntion still in working not completed yet bcz it is asych fucntion

//node js alag thread pe ise excute kar raha hain so node js immdiately invoked the next instuction fetch()