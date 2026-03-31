const http= require("http")
const fileSystem= require("fs")
// const path= require

const server=http.createServer((req,res)=>{
     

    //home page

    if(req.url=="/")
    {
        res.setHeader("content-type","text/html")
        fileSystem.readFile("./pages/home pages/home.html",(error,data)=>{
            if (error)
            { 
                res.setHeader("content-type","text/html")
                res.write(`oops, somethig went wrong; please try later`)
                console.log(`error while reading a data ${error}`)
            }
            else
            {
                res.setHeader("content-type","text/html")
                res.write(data)
                console.log(`data is successfully read: ${data}`)
                res.end()
            }

        })
    
    } //end of "/"
    else if(req.url=="/homeCss")
    {
        fileSystem.readFile(`./pages/home pages/home.css`,(error,data)=>{

            if (error)
            { 
                res.setHeader("content-type","text/html")
                res.write(`oops, somethig went wrong; please try later`)
                console.log(`error while reading a data ${error}`)
            }
            else
            {
                res.setHeader("content-type","text/css")
                res.write(data)
                console.log(`data is successfully read: ${data}`)
                res.end()
            }
        })

    } //homecss

    //calculator page

    else if(req.url=="/calculator")
    {
        fileSystem.readFile("./pages/main page/main.html",(error,data)=>{
            if(error)
            {
                console.log(`${error}: while error reading that file`)
            }
            else
            {
                res.setHeader("content-type","text/html")
                res.write(data)
                console.log(`data is successfully read: ${data}`)
                res.end()
            }

        })        
    } //end calculator

    else if(req.url=="/mainCss")
    {

        fileSystem.readFile("./pages/main page/main.css",(error,data)=>{

            if(error)
            {
                console.log(`error while reading a data`)
            }
            else
            {
                res.setHeader("content-type","text/css")
                res.write(data)
                console.log("data is successfully read")
                res.end()
            }
        })
    }

    //result page

    else if(req.url=="/calculator-result" && req.method=="POST")
    {
        const dataArr=[]

        req.on("data",(chunks)=>{
                // console.log(chunks)
                dataArr.push(chunks)
                })
        req.on("end",()=>
            
                {const concatChunks=Buffer.concat(dataArr).toString()

                    const param= new URLSearchParams(concatChunks)

                    const dataObj={}
                    for( let [key,value] of param.entries())
                    {
                        dataObj[key]=value
                    }
                    console.log(dataObj)
                    const sum=Number(dataObj.num1) + Number(dataObj.num2)
                    console.log("sum:",sum)
        
                
                    fileSystem.readFile("./pages/result page/result.html",(error,data)=>{

                    if(error)
                    {
                        res.setHeader("content-type","text/html")
                        res.write("<p>oops, page is not loaded</p>")
                        console.log("error")
                    }
                    else
                    {
                        const resultScore=data.toString().replace("{{result}}",sum)
                        
                        // console.log("result:",resultScore)
                        res.setHeader("content-type","text/html")
                        res.write(resultScore)
                        console.log(`result is sended`)
                        res.end()
                    }
                })
        })
    }

    else if(req.url=="/resultCss")
    {

        fileSystem.readFile("./pages/result page/result.css",(error,data)=>{
            if(error)
            {
                console.log("error:",error)
            }
            else
            {
                res.setHeader("content-type","text/css")
                res.write(data)
                console.log("css reach properly of result")
                res.end()
            }
        })
    }


})

const port=10001
server.listen(port,()=>{
    console.log(`server is listen at http//localhost:${port}`)
})

