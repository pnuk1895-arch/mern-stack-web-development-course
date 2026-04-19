const express=require("express")
const { registerForm }=require("../controllers/hostController")
const { addRegisterFormData }=require("../controllers/hostController")
const hostRoutes=express.Router()


hostRoutes.get("/host/add-home",registerForm)



hostRoutes.post("/host/added",addRegisterFormData)








module.exports={
    hostRoutes
}