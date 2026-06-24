const path=require("path")

function homePage(req,res){
    const homePath=path.join(__dirname,"../public/index.html")
    
    res.sendFile(homePath,(error)=>{
        if(error)
        {
            console.log("error while sending home page", error)
        }
        else
        {
            console.log("home page has been send")
        }
    })
}

async function callToLLM(req,res)
{
    const { prompt } = req.body

    const model="gemini-2.5-flash-lite"
    const Apikey="AQ.Ab8RN6JkIHlF_nxGuhPosZeTiGhdUYRqCeI8_H9kMxVt1VcDlA"
    const URL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${Apikey}`;

    try {
        const responseLLM= await fetch(URL,{
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
                contents:[{
                    parts:[{
                        text:prompt
                    }]
                }],
                generationConfig:{
                    maxOutputTokens: 40, // Strictly limits the output to ~60 tokens
                    temperature: 0.7
                }
            })
        })
        
    // const data= await responseLLM.json() 
    // // console.log(data)
        const reader = responseLLM.body.getReader();//getReader() stream ko read karne ke liye reader object deta hai.
        const decoder = new TextDecoder()
         while(true)
        { 
            const { done, value } = await reader.read();
            const chunk = decoder.decode(value);
            // console.log(done,`value ;${value}`)

            // const result= chunk
            console.log(chunk)
            // res.json({
            //     result:result
            // })
            

            if(done===true)
            break

        }
        // res.json({
        //     result:result
        // })

    } catch (error) {
        console.log(`error while fetching llm ${error}`)
    }
    
}

module.exports={
    homePage,
    callToLLM
}


