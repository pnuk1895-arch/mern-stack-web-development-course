const express =require("express")
const dotenv=require("dotenv")
const mongoose = require("mongoose")
const userRoute=require("./routes/userRoutes")
const cors=require("cors")

dotenv.config()
const app= express()

app.use(cors())//it will allow the request comming from other address
app.use(express.json())
//meddleware registration
app.use(userRoute)



async function mongoDB(){
    try {

    await mongoose.connect(process.env.mongoDB_Cloud)
    console.log("mongoDB connected successfully")
    app.listen(process.env.PORT,()=>{
    console.log("server is listening at ", process.env.PORT)
})
} catch (error) {
    console.log(`error while connected to mongoDB ${error}`)
}
}
mongoDB()


