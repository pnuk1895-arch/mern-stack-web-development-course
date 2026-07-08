const express=require("express")
const { submitSignUp ,submitLogin}=require("../controllers/userControllers")

const userRoute=express.Router()

userRoute.post("/submit:signUp", submitSignUp )
userRoute.post("/login", submitLogin )


module.exports=userRoute