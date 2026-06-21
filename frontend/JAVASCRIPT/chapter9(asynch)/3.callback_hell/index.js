function fdfs(data)
{    console.log(`fetching ${data}`)
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             resolve(data)
             reject("error while fetching the data")
         },3000)
     })
}



let promise=fdfs("data 1")

console.log(promise)