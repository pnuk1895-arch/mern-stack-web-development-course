// step 1: importing a google gemine ai SDK(software development kit yah )
import { GoogleGenAI } from "@google/genai";
// step 2: creating a object using class 
const ai = new GoogleGenAI({apiKey:""});
// step 3: API call to the google gemine ai LLM model
async function chatMe(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: prompt
  });
  console.log(response.text);
}

await chatMe("Explain how AI works in a few words");