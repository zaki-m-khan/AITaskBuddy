const axios = require('axios');

// Azure DALL-E API configuration
const dalleEndpoint = "https://slung-m8jeb4q3-swedencentral.openai.azure.com/openai/deployments/dall-e-3/images/generations?api-version=2024-02-01";
const dalleApiKey = "EEhhzzVPzqGdRk3pSX78gGDYiYx0C7MkQVjGqojPl33hkmaJPOLtJQQJ99BCACfhMk5XJ3w3AAAAACOG7XzZ";

/**
 * Generate an image using DALL-E based on a text prompt
 * @param {string} prompt - Text prompt describing the desired image
 * @returns {Promise<string>} - URL to the generated image
 */
async function generateImageFromText(prompt) {
  try {
    console.log(`Generating image for prompt: "${prompt.substring(0, 50)}..."`);
    
    const response = await axios.post(
      dalleEndpoint,
      {
        prompt: prompt,
        size: "1024x1024",
        n: 1
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'api-key': dalleApiKey,
        },
      }
    );
    
    console.log("Image generation successful");
    
    // Return the URL of the generated image
    if (response.data && response.data.data && response.data.data.length > 0) {
      return response.data.data[0].url;
    } else {
      throw new Error("No image URL returned from API");
    }
  } catch (error) {
    console.error("Error generating image:", error.response?.data || error.message);
    throw new Error(`Image generation failed: ${error.message}`);
  }
}

/**
 * Generate images for a list of task steps
 * @param {Array<string>} steps - List of task steps to visualize
 * @returns {Promise<Array<{step: string, imageUrl: string}>>} - Steps with their image URLs
 */
async function generateImagesForTaskSteps(steps) {
  try {
    console.log(`Generating images for ${steps.length} task steps`);
    
    // Generate images for each step (limit to 3 steps to prevent overloading)
    const stepsToVisualize = steps.slice(0, 3);
    
    const stepsWithImages = await Promise.all(
      stepsToVisualize.map(async (step) => {
        try {
          const prompt = `Create a simple, clear illustration showing: ${step}. The image should be easy to understand and helpful for someone with cognitive disabilities.`;
          const imageUrl = await generateImageFromText(prompt);
          return { step, imageUrl };
        } catch (error) {
          console.error(`Error generating image for step "${step}":`, error);
          return { step, imageUrl: null, error: error.message };
        }
      })
    );
    
    return stepsWithImages;
  } catch (error) {
    console.error("Error generating task step images:", error);
    throw error;
  }
}

module.exports = { generateImageFromText, generateImagesForTaskSteps }; 