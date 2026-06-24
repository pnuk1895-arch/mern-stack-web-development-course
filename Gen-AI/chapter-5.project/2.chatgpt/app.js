const express = require("express")
const dotenv= require("dotenv")
const userRoutes=require("./routes/userRoutes")

const app=express()
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({ extended: true })); 
app.use(express.static("public"))

// middleware was registered here it wil excute when user send the request to the route 
app.use(userRoutes)

// console.log( process.env.PORT)
const port= 5000
app.listen(port,()=>{
    console.log(`server is listening at ${port}`)
})
