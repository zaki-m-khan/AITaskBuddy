const axios = require('axios');

// Azure OpenAI API configuration
const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_API_KEY;
const modelName = process.env.AZURE_OPENAI_MODEL || "gpt-4";

async function handleChat(userMessages) {
  try {
    // Format messages for Azure OpenAI API
    const messages = [
      {
        role: "system",
        content: "You are a supportive, responsible, and accessible virtual chat bot designed to help individuals with disabilities, special needs, or other barriers to employment. Your role is to break down tasks into clear, simple steps. Your responses should be concise, practical, easy to understand, and focused on helping users complete their tasks successfully. Keep explanations brief and steps actionable."
      },
      ...userMessages.map(msg => ({
        role: msg.role,
        content: msg.content
      }))
    ];

    const response = await axios.post(
      `${endpoint}/openai/deployments/${modelName}/chat/completions?api-version=2023-05-15`,
      {
        messages,
        max_tokens: 800,
        temperature: 0.7,
        top_p: 1.0,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'api-key': apiKey,
        },
      }
    );

    // Extract the response content
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error calling OpenAI API:", error.response?.data || error.message);
    throw new Error("Failed to get a response from the AI service. Please try again later.");
  }
}

module.exports = { handleChat }; 