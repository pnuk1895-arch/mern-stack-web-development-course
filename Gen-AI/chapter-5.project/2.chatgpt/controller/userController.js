const path = require("path")
// const dotenv = require("dotenv")
const conversationModel = require("../model/conversationModel")

// dotenv.config()

function homePage(req, res) {

    const homePath = path.join(__dirname, "../public/index.html")

    res.sendFile(homePath, (error) => {

        if (error) {
        
            console.log("error while sending home page", error)
        
        }
        else {
        
            console.log("home page has been send")
        
        }
    })
}

async function callToLLM(req, res) {
    
    const { prompt, conversationId } = req.body

    let conversationObj ;

try {
    if(!conversationId) {
        conversationObj = new conversationModel(
            {
                title: prompt,
                messages: [
                    {
                        role: "user",
                        text: prompt
                    }
                ]
            }
        )
        await conversationObj.save()
        console.log("data save")
    }
    else{
        conversationObj = await conversationModel.findById(conversationId)

        if(!conversationObj)
        {
            return res.status(400).json({
                success: false,
                message: "Connection down.Try again"
            })
        }
        
        conversationObj.messages.push(
            {
                role:"user",
                text:prompt
            }
        )
    }


    const model =process.env.API_KEY
    const Apikey =process.env.API_KEY
    const URL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${Apikey}`
    console.log(Apikey, model)
    
        const responseLLM = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }],
                generationConfig: {
                    maxOutputTokens: 60, // Strictly limits the output to ~60 tokens
                    temperature: 0.7
                }
            })
        })

        const data = await responseLLM.json()

        const result = data //|| "no response found" .candidates?.[0].content.parts?.[0].text
        
        console.log("result",result)
        
        // conversationObj.messages.push({
        //     role:"Ai",
        //     text:result
        // })


        // await conversationObj.save()
        // console.log("ID",conversationObj._id)

        // res.status(200).json(
        //     {
        //         success:true,
        //         result:result,
        //         conversationId:conversationObj._id
        //     }
        // )
    
    } catch (error) {
        console.log(`error while fetching llm ${error.stack}`)
    }
}

module.exports = {
    homePage,
    callToLLM
}


