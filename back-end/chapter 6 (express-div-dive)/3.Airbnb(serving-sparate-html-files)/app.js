// make a project to create a server and serve different html file separately and style it using vanila css 


const userRoutes=require("./routes/userRoutes")
const hostRoutes=require("./routes/hostRoutes")

const express=require("express")
const path= require("path")
const app=express()

app.use(express.static(path.join(__dirname,"./","public")))



app.use(userRoutes)

app.use(hostRoutes)



const port=3010
app.listen(port,()=>{
    console.log("server is listening at 3010")
})