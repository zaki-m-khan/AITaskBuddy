// Speech-to-text service

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const speechToText = async (audioBlob) => {
  try {
    console.log('Sending audio to server for processing...');
    
    const formData = new FormData();
    formData.append('audio', audioBlob, 'recording.wav');
    
    const response = await fetch(`${API_URL}/api/speech-to-text`, {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Speech to text conversion failed with status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Speech processing successful:', data.text);
    return data.text;
  } catch (error) {
    console.error('Error in speech to text conversion:', error);
    throw error;
  }
}; 