// url search params

// reading the chunks of client submitted data 
const http=require("http")
const { json } = require("stream/consumers")

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

      // data is not comming in one pack it is comming in chunk so jase hi data ka pahla chunk aa jaye is call back ko run kar dena 
      let body=[]
       req.on("data",(chunk)=>{
          console.log("chunks:", chunk)
        // jitne bhi chunk hai un sb ko array mai store karenge
          body.push(chunk)
       })

       req.on("end",()=>{
        // jointing chunks
         const concatinate_concat=Buffer.concat(body)
         console.log(concatinate_concat)//hexa decimal

        //  convert hexadecimal to string 
        let stringForm=concatinate_concat.toString()
        console.log("stringform:",stringForm)
        //conerting in key value pair form (but it is not a javascript object that only like )
        const params= new URLSearchParams(stringForm)
        console.log(params)

        console.log(params.entries())

        const object={}
        for(let item of params.entries())
           {
             console.log(item)
             let [key,values]=item
             object[key]=values
            }

        console.log(object)
  })
  }
})


server.listen(3000,()=>{
  console.log("server is lsitening")
})