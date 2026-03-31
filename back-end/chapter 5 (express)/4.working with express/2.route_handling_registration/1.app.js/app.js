const express=require("express")

const app=express()//

//route handling registration
app.get("/",(req,res)=>{
        console.log(`welcome to home page`)
        res.send(`welcome to home page`)
})

app.get("/about",(req,res)=>{
    console.log(`welcome to about page`)
    res.send(`welcome to about pages`)
})

app.get("/contact",(req,res)=>{
    console.log(`welcome to contact page`)
    res.send(`welcome to contact page`)
})







const port=30001
app.listen(port,()=>{
    console.log(`server is listen at localhost:${port}`)
})