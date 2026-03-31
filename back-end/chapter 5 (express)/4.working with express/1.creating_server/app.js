//creating a server with exrpess


//importing express(external module)
const express=require("express")//it return a function

const app=express()//running  this function give object
console.dir(app)


//creating a server 
const port=4000
//inernally create a server(using http module),as well as listen a upcomirequest
app.listen(port,()=>{
console.log(`server is running at http://localhost:${port}`)

})