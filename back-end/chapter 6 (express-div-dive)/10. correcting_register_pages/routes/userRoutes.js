const express=require("express")
const {getHome, booking, storeFavourite, hostHomeList, homeDetails}=require("../controllers/userController")

const userRoutes=express.Router()


userRoutes.get("/",getHome)

userRoutes.get("/booking",booking)

userRoutes.get("/favourite/:Homeid",storeFavourite)

userRoutes.get("/hostHomeList",hostHomeList)

userRoutes.get("/home/details/:id", homeDetails)









module.exports=userRoutes