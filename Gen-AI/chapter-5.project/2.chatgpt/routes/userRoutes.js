const express=require("express")
const { homePage, callToLLM}=require("../controller/userController")

const userRoutes=express.Router()

userRoutes.get("/",homePage)

userRoutes.post("/chat",callToLLM)




module.exports=userRoutes