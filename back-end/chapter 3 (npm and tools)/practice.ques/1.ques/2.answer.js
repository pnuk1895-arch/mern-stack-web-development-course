const http=require("http")

const server=http.createServer((req,res)=>{

})

let port=4000
server.listen(port,()=>{
    console.log(`server is listen at http//localhost:${port}`)
})