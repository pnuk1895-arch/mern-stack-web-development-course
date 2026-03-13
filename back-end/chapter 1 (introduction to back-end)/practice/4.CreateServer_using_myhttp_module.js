let myhttp= require("./3.myhttpmodule")

let myServer=myhttp.myCreateServer((req,res)=>{
   
 console.log(req.url)
 console.log(req.method)
 res.setHeader("html")
 res.write("this is your profile")
 res.end()
})

