const express= require("express")
const cors= require("cors")
const dotenv= require("dotenv")
dotenv.config()

const app=express()

app.use(express.json())
app.use(cors())


app.post("/chat",(req,res)=>{
    const { prompt } = req.body

    res.send(JSON.stringify( 
        {result: `you said: ${prompt}`}
    ))
})

const port=process.env.PORT
app.listen(port,()=>{
    console.log(`server is listening in ${port}`)
})




