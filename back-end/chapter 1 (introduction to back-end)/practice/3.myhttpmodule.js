function myCreateServer(callback)
{
     //here we will be logic for creating a server
     console.log("i have create http server")
      setTimeout(()=>{  
        let request={
        url:"/",
        method:"get",

     }
     let response={
        setHeader:(text)=>{
          console.log(`i have set your header: ${text}`)
        },
        write:(content)=>{
            console.log(`i have your data to the client: ${content}`)
        },
        end:()=>{
          console.log('request and response has been completed')
        }
      }

      callback(request,response)
   },5000)
   




}

module.exports={
    myCreateServer
}