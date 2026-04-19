
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


// in this project, there is a problem is that whenever we restart the server list home is disappeared. It's happen because we storing register data in a array. we know that the life of any array, object. and any variable, It's exist till the life of program.

// so we have to store data permanently in a hard disk.
// and as we know that in a hard disk we stored the data in the form of file.