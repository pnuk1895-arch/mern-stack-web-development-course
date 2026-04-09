

const userRoute=require("./routes/userRoutes")
const hostRoute=require("./routes/hostRoutes")

const express=require("express")
const fs= require("fs")
const path=require("path")

const app=express()

//middleware registration userRoute
app.use(userRoute)

//middleware registration hostRoute
app.use(hostRoute)


const port=3001
app.listen(port,()=>{
 console.log("server is listening 3001")
})