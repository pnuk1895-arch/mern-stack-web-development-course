import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function chatMe(prompt) {
  try {
    const response = await openai.responses.create({
      model: "gpt-5.5",
      input: prompt
    });

    console.log("Model:", response.output_text);
  } catch (error) {
    console.error("Error:", error);
  }
}

await chatMe("Hey, how are you?");