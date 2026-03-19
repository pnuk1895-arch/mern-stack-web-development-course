let http=require("http")

let server=http.createServer((req,res)=>{
        

})

let port=3001
server.listen(port,()=>{
    console.log(`server is listen at http//localhost:${port}`)
})