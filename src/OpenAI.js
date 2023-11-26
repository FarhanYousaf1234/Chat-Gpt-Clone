import OpenAI from 'openai';

const OPENAI_API_KEY = "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";

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

async function sendMessageToOpenAI(message) {
    try {
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: message }],
            model: 'gpt-3.5-turbo',
        });

        if (chatCompletion && chatCompletion.choices && chatCompletion.choices.length > 0) {
            const content = chatCompletion.choices[0]?.message?.content || 'No content available';
            return content;
        } else {
            console.error('Invalid response structure from OpenAI API:', chatCompletion);
            return 'Failed to get a valid response from OpenAI';
        }
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export { sendMessageToOpenAI };
