// accessing http module 
let http= require("http")

// creating server 
let server= http.createServer((req,res)=>{

    if(req.url=="/")
    {
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
                        </h1>
                    </body>
                    </html>`)
        res.end()
}
else if(req.url=="/men")
    { res.setHeader("content-type","text/html")
        res.write(`<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>myntra</title>
                    </head>
                    <body>
                        <h1>  
                        "Welcome to Men Section"  
                        </h1>
                    </body>
                    </html>`)
        res.end()
}
else if(req.url=="/women")
    {
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
                        "Welcome to Women Section"  
                        </h1>
                    </body>
                    </html>`)
        res.end()
    }
    else if(req.url=="/kids")
        {
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
                            "Welcome to Kids Section"  
                            </h1>
                        </body>
                        </html>`)
             res.end()
        }
    else if(req.url=="/cart")
    {
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
                        "Welcome to Cart Section"
                        </h1>
                    </body>
                    </html>`)
        res.end()
    }
    
    else
    { res.setHeader("content-type","text/html")
        res.write(`<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>myntra</title>
                    </head>
                    <body>
                        <h1>
                        This page is not exist
                        </h1>
                    </body>
                    </html>`)
        res.end()

    }
    
})

let port= 40001
server.listen(port,()=>[
    console.log(`server listen port number: ${port}`)
])

