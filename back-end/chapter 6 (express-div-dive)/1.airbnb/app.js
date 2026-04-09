const express=require("express")
const fs= require("fs")
const path=require("path")

const app=express()


app.get("/",(req,res)=>{

    const welcomePath=path.join(__dirname,"./pages/1.welcome_pages/index.html")

    fs.readFile(welcomePath,"UTF-8",(error,data)=>{
            if(error)
            {
                res.send("oops! Something went wrong")
                console.log(`error found ${error}`)
            }
            else 
            {
                res.send(data)
                console.log(`welcome html page landed perfectly ; ${data}`)
            }
        }) 
        
})// welcome html pages codes end here

app.get("/welcomeCss",(req,res)=>{

    const wCssPath = path.join(__dirname,"./pages/1.welcome_pages/index.css")

    fs.readFile(wCssPath,(error,data)=>{
        if(error)
        {
            console.log(`error in welcome css:${error}`)
        }
        else
        {
            res.send(data)
            console.log("welcome css file landed properly")
        }
    })
}) //welcome css file loaded properly

app.get("/Add_home",(req,res)=>{

    const homeHtmlPath=path.join(__dirname,"./pages/2.home_pages/index.html")

    fs.readFile(homeHtmlPath,(error,data)=>{
         if(error)
        {
            res.send("oops something went wrong, try again later")
            console.log(`error in home html:${error}`)
        }
        else
        {
            res.send(data)
            console.log("home html file landed properly")
        }
    })
}) //home page end here

app.post("/submit",(req,res)=>{

    const submitHtmlPath=path.join(__dirname,"./pages/3.result_pages/index.html")

    fs.readFile(submitHtmlPath,(error,data)=>{
        if(error)
        {
            res.send("oops, something went wrong. Try Again later")
            console.log(`error of submit html:${error}`)
        }
        else
        {
            res.send(data)
            console.log("submit html page loaded successfully")
        }
    })
})



const port=30001
app.listen(port,()=>{
    console.log(`server is listen at: ${port}`)
})





