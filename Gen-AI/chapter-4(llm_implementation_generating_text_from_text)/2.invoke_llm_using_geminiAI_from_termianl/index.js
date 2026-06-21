// step 1: importing a google gemine ai SDK(software development kit yah )
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config()


// step 2: creating a object using class 
const ai = new GoogleGenAI({apiKey:process.env.API_KEY});

// step 3: API call to the google gemine ai LLM model
async function chatMe(prompt) {

try {
    const response = await ai.models.generateContent(
{
      model: "gemini-3.5-flash",
      contents:[
        {
        role:"user",
        parts:prompt
        }
    ]
    });
    console.log("model:",response.text);
    
} catch (error) {
    console.log(error)
}

 
}

// taking user input from the termianl

process.stdout.write("hey i am your llm ask anything:")

process.stdin.on("data",(input)=>{
    // parsing the input because data is not in string readable format. it is in buffer format
    const parse=input.toString()
    console.log("you:",parse)
    chatMe(parse)
})