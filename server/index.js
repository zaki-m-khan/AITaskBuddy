require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { breakdownTask } = require('./aiTaskBreakdown');
const { handleChat } = require('./chatHandler');
const { processDocumentWithAzure } = require('./documentServices');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ 
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // Limit to 10MB
  fileFilter: (req, file, cb) => {
    // Accept only document files
    if (file.mimetype === 'application/pdf' || 
        file.mimetype === 'application/msword' || 
        file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
        file.mimetype === 'text/plain') {
      cb(null, true);
    } else {
      cb(new Error('Unsupported file type. Please upload PDF, Word, or text documents.'), false);
    }
  }
});

// Task breakdown endpoint
app.post('/api/breakdown', async (req, res) => {
  try {
    const { title, description } = req.body;
    
    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }
    
    const steps = await breakdownTask(title, description);
    res.json({ steps });
  } catch (error) {
    console.error('API error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Document upload and analysis endpoint
app.post('/api/document-breakdown', upload.single('document'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No document file uploaded' });
    }
    
    console.log('Document file received:', req.file.originalname, req.file.mimetype);
    
    try {
      // Extract text from document using Azure Document Intelligence
      const documentContent = await processDocumentWithAzure(req.file.buffer, req.file.mimetype);
      
      // Get task title from request or use filename
      const title = req.body.title || req.file.originalname || 'Document Task';
      
      // Process the extracted text with the AI to break it down into steps
      const steps = await breakdownTask(title, documentContent);
      
      console.log('Document processed successfully');
      return res.json({ 
        title,
        content: documentContent,
        steps 
      });
    } catch (processingError) {
      console.error('Error processing document content:', processingError);
      // Return a 500 with the specific error
      return res.status(500).json({ 
        error: 'Failed to process document content', 
        details: processingError.message 
      });
    }
  } catch (error) {
    console.error('Error handling document upload:', error);
    return res.status(500).json({ 
      error: 'Failed to process document', 
      details: error.message 
    });
  }
});

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Valid messages array is required' });
    }
    
    // For development, you can use this mock implementation
    // res.json({ response: "This is a mock response. The real AI integration is coming soon!" });

    // For production, use the actual OpenAI implementation
    const response = await handleChat(messages);
    res.json({ response });
  } catch (error) {
    console.error('Chat API error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 