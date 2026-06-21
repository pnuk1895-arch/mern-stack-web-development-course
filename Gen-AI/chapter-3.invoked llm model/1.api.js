import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey:""});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: "what is my name",
  });
  console.log(response.text);
}

await main();