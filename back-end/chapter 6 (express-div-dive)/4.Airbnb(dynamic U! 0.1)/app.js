
const hostRoutes=require("./routes/hostRoutes")
const userRoutes=require("./routes/userRoutes")


const express=require("express")
const app=express()


app.use(hostRoutes)
app.use(userRoutes)







const port=4001
app.listen(port,()=>{
    console.log(`server is listen at ${port}`)
})