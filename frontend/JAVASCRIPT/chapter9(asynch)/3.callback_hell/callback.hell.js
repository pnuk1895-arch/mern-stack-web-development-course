// Callback Hell:when we  using too many nested callbacks,code becomes VERY confusing, nested, and hard to read,

// This usually looks like a pyramid structure


fdfs("data1",(result)=>{
   
   console.log(result)
   fdfs("data2",(result)=>{
      console.log(result)

      fdfs("data3",(result)=>{
        console.log(result)
      })
   })


})
// this is a call back hell