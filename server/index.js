require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { breakdownTask } = require('./aiTaskBreakdown');
const { handleChat } = require('./chatHandler');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

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