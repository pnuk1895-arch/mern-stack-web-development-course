const express=require("express")
const app=express()

// buildin middleware regitration
app.get("/",(req,res)=>{
    res.send(`<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                </head>
                <body>
                    <h1>Welcome to your Home page</h1>
                    <form action="/submit" method="post">
                    <label for="name">name</label>
                    <input type="text" id="name" name="userName" placeholder="enter you name">
                    <label for="gender">Gender:</label>
                    <label for="male">male</label>
                    <input type="radio" id="male" name="gender" value="male">
                    <label for="female">female</label>
                    <input type="radio" id="female" name="gender" value="female">
                    <button type="submit">submit</button>
                    </form>
                </body>
                </html>`)
     })


//middleware registration(prasing)
app.use(express.urlencoded({ extended: true }))

// routes handling registration
app.post("/submit",(req,res)=>{
     console.log(req.body)
})


const port=3000
app.listen(port,()=>[
    console.log(`server is listening at ${port}`)
])
