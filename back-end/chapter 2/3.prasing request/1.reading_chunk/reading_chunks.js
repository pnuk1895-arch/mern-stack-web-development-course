const http=require("http")

let server=http.createServer((req,res)=>{

  //sending a form to the client 

    if(req.url=="/")
    { 
        res.setHeader("content-type","text/html")
        res.write(` <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
        <h1>Welcome to your Home page</h1>
        <form action="/submitted" method="post">
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

      res.end()

    }

    //handling a form data
    else if(req.url=="/submitted")
    {
      res.setHeader("content-type","text/html")
      res.write(`your form is succussfully submitted`)
      console.log("your form is succssfully submitted")
      res.end()
    }
})
let port=3010
server.listen(port,()=>{
  console.log(`server is listen at http//localhost:${port}`)
})