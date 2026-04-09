const express=require("express")
const fs=require("fs")
const path=require("path")


const userRoutes=express.Router()

userRoutes.get("/",(req,res)=>{

    const welcomeHtmlPath= path.join(__dirname,"../pages/1.welcome_pages/index.html")

    res.sendFile(welcomeHtmlPath,(error)=>{
        if(error)
        {
            res.send("oops something went wrong. Try again later")
            console.log(`error while send a home page :${error}`)
        }
        else
        {
            console.log('data send qsuccessfully')
        }

    })    
}) //welcome html pages ends here

userRoutes.get("/register",(req,res)=>{

    const registerHtmlPath=path.join(__dirname,"../pages/2.register_pages/index.html")

    res.sendFile(registerHtmlPath,(error)=>{
        if(error)
        {
            res.send("oops something went wrong. Try again later")
            console.log(error)
        }
        else{
            console.log("data landed successfully")
        }
    })
})//register files end here

userRoutes.post("/submit",(req,res)=>{

    const resultHtmlPath=path.join(__dirname,"../pages/3.result_pages/index.html")

    res.sendFile(resultHtmlPath,(error)=>{
        if(error)
        {
            res.send("oops, something went wrong. Try again later")
            console.log(error)
        }
        else{
            console.log("file is submited")
        }
    })
})


module.exports= userRoutes
