const axios = require('axios');

// Azure OpenAI API configuration
const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_API_KEY;
const modelName = process.env.AZURE_OPENAI_MODEL || "gpt-4";

async function breakdownTask(title, description) {
  try {
    const messages = [
      {
        role: "system",
        content: "You are a supportive, accessible AI assistant designed to help people with disabilities break down tasks into clear, simple steps. Your responses should be concise, practical, and easy to understand."
      },
      {
        role: "user",
        content: `I need to complete this task: "${title}". ${description ? `Additional details: ${description}` : ''} Please break it down into simple, clear steps that are easy to follow.`
      }
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

    // Parse the response to extract steps
    const content = response.data.choices[0].message.content;
    
    // Split by numbered lines or bullet points
    let steps = [];
    
    if (content.includes("\n1.")) {
      // Numbered format
      steps = content
        .split(/\n\d+\.\s+/)
        .filter(Boolean)
        .map(step => step.trim());
    } else if (content.includes("\n- ")) {
      // Bullet point format
      steps = content
        .split(/\n-\s+/)
        .filter(Boolean)
        .map(step => step.trim());
    } else {
      // Just split by sentences as a fallback
      steps = content
        .split(/\.\s+/)
        .filter(Boolean)
        .map(step => step.trim() + ".");
    }
    
    return steps;
  } catch (error) {
    console.error("Error calling OpenAI API:", error.response?.data || error.message);
    throw new Error("Failed to break down the task. Please try again later.");
  }
}

module.exports = { breakdownTask }; 