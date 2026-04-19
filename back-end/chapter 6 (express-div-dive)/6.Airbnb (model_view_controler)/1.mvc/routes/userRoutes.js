const express=require("express")
const getHome=require("../controllers/userController")

const userRoutes=express.Router()


userRoutes.get("/",getHome)











module.exports=userRoutes