import dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});


export async function getChatCompletion(userPrompt) {
    return await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ "role": "user", "content": userPrompt }],
        max_tokens: 150,
    });
}

export async function getMoodResponse(timestamp) {
    return await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                "role": 'user',
                "content": `Tell me a random act of kindness and a positive quote. 
                Generate it randomly from the date and time - ${timestamp} . Keep it short 
                and simple. In format ({Random act of kindness}\n{Positive Quote}).
                 Don't use quotation marks!`
            }
        ],
        max_tokens: 100,
    });
}
