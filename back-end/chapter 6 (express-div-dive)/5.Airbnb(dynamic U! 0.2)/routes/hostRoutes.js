const express=require("express")
const path=require("path")

const hostRoutes=express.Router()


hostRoutes.get("/host/add-home",(req,res)=>{

    const addHomePath=path.join(__dirname,"../view/register.html")

    res.sendFile(addHomePath,(error)=>{
        if(error)
        {
            res.send("oops, Something went wrong. Try again later")
            console.log(`addhome:${error}`)
        }
        else
        {
            console.log("files landed successfully")
        }
    })
})

const registerHome=[]

hostRoutes.post("/host/added",(req,res)=>{
    console.log(req.body)
   
    registerHome.push(req.body)
    const addedPath=path.join(__dirname,"../view/submit.html")

    res.sendFile(addedPath,(error)=>{
        if(error)
        {
            res.send("oops, Something went wrong. Try again later")
            console.log(`addedhome:${error}`)
        }
        else
        {
            console.log("files landed successfully")
        }
    })
})









module.exports={
    hostRoutes,
    registerHome
}