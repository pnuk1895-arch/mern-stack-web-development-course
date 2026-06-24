const path=require("path")
const dotenv=require("dotenv")

dotenv.config()

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

    const model=process.env.MODEL
    const Apikey=process.env.API_KEY
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


