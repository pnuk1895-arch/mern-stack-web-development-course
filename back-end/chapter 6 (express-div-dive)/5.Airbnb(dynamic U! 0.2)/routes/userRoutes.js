const express=require("express")
const path=require("path")
const { registerHome } = require("./hostRoutes")

const userRoutes=express.Router()


userRoutes.get("/",(req,res)=>{

    // const homePath=path.join(__dirname,"../view/home.html")

    // res.sendFile(homePath,(error)=>{
    //     if(error)
    //     {
    //         res.send("oops, something went wrong. Try again later")
    //         console.log(`Home:${error}`)
    //     }
    //     else
    //     {
    //         console.log("files landed successfully")
    //     }
    // })

    res.render("home",{registerHome})
})










module.exports=userRoutes