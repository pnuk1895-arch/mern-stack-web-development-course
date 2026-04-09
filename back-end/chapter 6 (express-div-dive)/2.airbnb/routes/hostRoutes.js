

const express=require("express")
const path=require("path")


const hostRoutes=express.Router()

hostRoutes.get("/host/addHome",(req,res)=>{

    const hostPath=path.join(__dirname,"../pages/host_pages/index.html")

    res.sendFile(hostPath,(error)=>{
        if(error)
        {
            res.send(`oops, something went wrong. Try again later`)
            console.log(error)
        }
        else
        {
            console.log("data send successfully")
        }
    })
})


module.exports=hostRoutes