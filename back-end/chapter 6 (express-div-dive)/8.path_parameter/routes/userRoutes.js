const express=require("express")
const {getHome, booking, favourite, hostHomeList, homeDetails}=require("../controllers/userController")

const userRoutes=express.Router()


userRoutes.get("/",getHome)

userRoutes.get("/booking",booking)

userRoutes.get("/favourite",favourite)

userRoutes.get("/hostHomeList",hostHomeList)

userRoutes.get("/home/details/:id", homeDetails)









module.exports=userRoutes