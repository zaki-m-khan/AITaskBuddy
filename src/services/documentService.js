/**
 * Service for document upload and processing
 */

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

/**
 * Upload a document and get task breakdown from the server
 * @param {File} documentFile - The document file to upload
 * @param {string} title - The title for the task
 * @returns {Promise<Object>} - The document content and task breakdown steps
 */
export const documentToTaskBreakdown = async (documentFile, title = '') => {
  try {
    console.log('Sending document to server for processing...', documentFile.name);
    
    const formData = new FormData();
    formData.append('document', documentFile);
    
    if (title) {
      formData.append('title', title);
    }
    
    const response = await fetch(`${API_URL}/api/document-breakdown`, {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Document processing failed with status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Document processing successful:', data);
    
    // Return a standardized response
    return {
      title: data.title || title || 'Document Task',
      content: data.content || '',
      steps: data.steps || []
    };
  } catch (error) {
    console.error('Error in document processing:', error);
    throw error;
  }
}; 