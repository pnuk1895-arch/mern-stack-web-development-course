let http= require("http")
let server=http.createServer((req,res)=>{

     console.log(req.url)
     console.log(req.method)

     res.setHeader("content-type","text/html")
     res.write(`<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>myntra</title>
                </head>
                <body>
                    <h1>
                    "Welcome to Home Section"  
                    "Welcome to Men Section"  
                    "Welcome to Women Section"  
                    "Welcome to Kids Section"  
                    "Welcome to Cart Section"
                    </h1>
                </body>
                </html>`)

 res.end()
})

let port=3011
server.listen(port,()=>{
    console.log(`server is listen at http//localhost:${port}`)
})
