
const express=require("express")
const path=require("path")
const hostRoutes=express.Router()



hostRoutes.get("/host/add_Home",(req,res)=>{

    const addHomePath=path.join(__dirname,"../view/2.register.html")

    res.sendFile(addHomePath,(error)=>{
        if(error)
        {
            res.send("oops, something went wrong. Try again later")
            console.log(error)
        }
        else
        {
            console.log("files landed successfully")
        }
    })
})


hostRoutes.post("/host/submited",(req,res)=>{

    const submitPath=path.join(__dirname,"../view/3.submit.html")

    res.sendFile(submitPath,(error)=>{
        if(error)
        {
            res.send("oops,Something went wrong, Try again later")
            console.log(error)
        }
        else
        {
            console.log("files landed successfully")
        }
    })
})





module.exports=hostRoutes