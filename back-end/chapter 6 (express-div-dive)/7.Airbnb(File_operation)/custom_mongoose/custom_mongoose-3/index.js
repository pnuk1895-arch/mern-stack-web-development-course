const mongoose=require("./mongoose")

let object= new mongoose("vinod_nagar",5000,7)

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
        console.log("data save successfully")
    }
})














//here problem is that fetch function immdiately call after the save but save fucntion still in working not completed yet bcz it is asych fucntion

//node js alag thread pe ise excute kar raha hain so node js immdiately invoked the next instuction fetch()