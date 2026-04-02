// url search params

// reading the chunks of client submitted data 
const http=require("http")
const fs=require("fs")
const path =require("path")

const server=http.createServer((req,res)=>{
  if(req.url==="/")
  {

          res.write(`
              <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
        <h1>Welcome to your Home page</h1>
        <form action="/submit-details" method="post">
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
      </html>
            `)

      res.end()
      return 
  }

  else if(req.url==="/submit-details" && req.method==="POST")
  {
       let body=[]
      // data is not comming in one pack it is comming in chunk so jase hi data ka pahla chunk aa jaye is call back ko run kar dena 
       req.on("data",(chunk)=>{
          console.log(chunk)
        // jitne bhi chunk hai un sb ko array mai store karenge
          body.push(chunk)
       })

       req.on("end",()=>{
         const parseBody=Buffer.concat(body).toString();
         console.log(parseBody)
         const params= new URLSearchParams(parseBody)
         const jsobj={}
        for(const [key,value] of params.entries())
        {
           jsobj[key]=value
        }
        console.log("obj",jsobj)
        let jsonObject=JSON.stringify(jsobj) //this function convert js to json files

        let filePath = path.join(__dirname,"./","userData.json") //
        fs.writeFile(filePath,jsonObject,(error)=>{

          if(error)
          { 
            res.setHeader("content-type","text/html")
            res.write("error while submitting a data")
            console.log("error while submitting a data") 
          }
          else
          {
            res.setHeader("content-type","text/html")
            res.write("data submitted successfully")
            console.log("data submitted successfully")
            res.end 
          }
        }) 
          
       })
     
  }
})


server.listen(3002,()=>{
  console.log("server is lsitening")
})