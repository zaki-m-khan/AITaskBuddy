/**
 * Service for generating images for task steps
 */

/**
 * Generate images for task steps
 * @param {Array<string>} steps - List of task breakdown steps
 * @returns {Promise<Array<{step: string, imageUrl: string}>>} - Steps with image URLs
 */
export const visualizeSteps = async (steps) => {
  try {
    console.log('Requesting visualization for steps:', steps);
    
    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';
    
    const response = await fetch(`${API_URL}/api/visualize-steps`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ steps }),
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Visualization failed with status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Steps visualization successful:', data);
    
    return data.visualizedSteps;
  } catch (error) {
    console.error('Error in steps visualization:', error);
    throw error;
  }
}; 