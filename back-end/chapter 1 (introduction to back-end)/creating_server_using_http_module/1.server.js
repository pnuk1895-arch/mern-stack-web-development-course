// accessing http module 
let http= require("http")

// creating server 
let server= http.createServer((req,res)=>{

    // console.log("req:",req)
    console.log(req.url)
    console.log(req.method)
})

let port= 30001
server.listen(port,()=>[
    console.log(`server listen port number: ${port}`)
])