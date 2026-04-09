 const express=require("express")
 const path=require("path")

 const userRoutes=express.Router()
 
 userRoutes.get("/",(req,res)=>{
     
    const welcomeHtmlPath= path.join(__dirname,"../view/1.home.html")

    res.sendFile(welcomeHtmlPath,(error)=>{
        if(error)
        {
            res.send("oops, something went wrong. Try again later")
            console.log(error)
        }
        else{
            console.log("files landed successfully")
        }
    })

 }) //home pages end here

 userRoutes.get("/add_Home",(req,res)=>{

    const registerHtmlPath =path.join(__dirname,"../view/2.register.html")
    
    res.sendFile(registerHtmlPath,(error)=>{
        if(error)
        {
            res.send("oops, something went wrong. Try again later")
            console.log(error)
        }
        else
        {
            console.log("data is landed successfully")
        }
    })

 })













module.exports = userRoutes