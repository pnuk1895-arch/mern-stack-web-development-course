const http= require("http")

const calculatorServer=http.createServer((req,res)=>{

     if(req.url=="/")
    { 
        res.setHeader("content-type","text/html")
        res.write(`<h1> welcome to Smart calculator </h1>
          <a href="/calculator">Go To calculator</a>`)
          res.end()
          return
    }
    else if(req.url=="/calculator")
    {
        res.setHeader("content-type","text/html")
        res.write(`<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>calculator</title>
                    </head>
                    <body>
                        <form action="/calculator-result" method="post">
                                <input type="number" name="num1" placeholder="Enter First Number">
                                <input type="number" name="num2" placeholder="Enter Second Number">
                                <button type="submit" >sum</button>
                        </form>
                        
                    </body>
                    </html>`)
                    res.end()
    }
    else if(req.url=="/calculator-result" && req.method=="POST")
    {
        const calculatorData=[]

        req.on("data",(chunks)=>{
            console.log("chunks:",chunks)
            calculatorData.push(chunks)
            console.log(calculatorData)
        })
        req.on("end",()=>{
            const concatData=Buffer.concat(calculatorData)
            const stringFrom =concatData.toString()
            console.log(stringFrom)

            const params= new URLSearchParams(stringFrom)
             
            const numObject={ }
            for(let [key,values] of params.entries())
            {
                numObject[key]=values
            }
            console.log(numObject)
             
            let sum=Number(numObject.num1) + Number(numObject.num2)

            console.log(sum)

            res.setHeader("content-type","text/html")
            res.write(`${sum} is sum of ${numObject.num1} and ${numObject.num2}`)
            console.log(`${sum} is sum of ${numObject.num1} and ${numObject.num2}`)
            res.end()
        })
        
    }

})

const port=3001
calculatorServer.listen(port,()=>{
    console.log(`server is listen at http//localhost:${port}`)
})