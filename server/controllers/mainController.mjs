import { getChatCompletion, getMoodResponse } from "./openaiController.mjs";

export async function handleChatRequest(req, res) {
    const userPrompt = req.body.userPrompt;
    console.log(userPrompt);

    try {
        const response = await getChatCompletion(userPrompt);
        res.json({ doctorResponse: response.choices[0].message.content.replace(/\n/g, "\\n") });
    } catch (error) {
        console.error('Error generating chat completion:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export async function handleMoodRequest(req, res) {
    const timestamp = new Date().getTime();

    try {
        const response = await getMoodResponse(timestamp);
        res.json({ response: response });
    } catch (error) {
        console.error('Error generating random act of kindness:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
