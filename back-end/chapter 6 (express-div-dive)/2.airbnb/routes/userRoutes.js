const express=require("express")
const fs=require("fs")
const path=require("path")


const userRoutes=express.Router()

userRoutes.get("/",(req,res)=>{

    const welcomeHtmlPath= path.join(__dirname,"../pages/1.welcome_pages/index.html")

    fs.readfile(welcomeHtmlPath,"utf-8",(error,data)=>{
        if(error)
        {
            res.send(`oops, something went wrong. Try again later`)
            console.log("error in welcome html pages:${error}")
        }
        else
        {
            res.send(data)
            console.log("welcome html pages is successfully")
        }
    })
})
