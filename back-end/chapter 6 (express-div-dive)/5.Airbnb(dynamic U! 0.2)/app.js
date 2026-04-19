
const {hostRoutes}=require("./routes/hostRoutes")
const userRoutes=require("./routes/userRoutes")


const express=require("express")
const path=require("path")
const app=express()

app.set('view engine','ejs')
app.set('views','view')

app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extented : true})) //prasing request 
app.use(hostRoutes)
app.use(userRoutes)







const port=4001
app.listen(port,()=>{
    console.log(`server is listen at ${port}`)
})