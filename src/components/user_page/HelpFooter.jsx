import React, { useState, useRef, useEffect } from "react";

function HelpFooter() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm your AI Task Buddy. How can I help you today?", isUser: false }
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of chat when new messages are added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (!inputText.trim()) return;
    
    // Add user message
    setMessages([...messages, { text: inputText, isUser: true }]);
    
    // Simulate AI response
    setTimeout(() => {
      let response = "I'm here to help break down your task. Could you tell me what you're working on?";
      
      // Simple keyword-based responses
      const lowerInput = inputText.toLowerCase();
      if (lowerInput.includes("report")) {
        response = "Creating a report involves several steps:\n1. Gather data\n2. Organize information\n3. Create an outline\n4. Write sections\n5. Add visuals if needed\n6. Proofread";
      } else if (lowerInput.includes("email")) {
        response = "To write an effective email:\n1. Create a clear subject line\n2. Start with a greeting\n3. State your purpose\n4. Keep it concise\n5. End professionally";
      } else if (lowerInput.includes("meeting") || lowerInput.includes("presentation")) {
        response = "For a successful presentation:\n1. Know your audience\n2. Prepare key points\n3. Create visual aids\n4. Practice delivery\n5. Arrive early to set up";
      } else if (lowerInput.includes("help") || lowerInput.includes("stuck")) {
        response = "I'm here to help! What specific task are you working on?";
      } else if (lowerInput.includes("thank")) {
        response = "You're welcome! Feel free to ask if you need more help.";
      }
      
      setMessages(prevMessages => [...prevMessages, { text: response, isUser: false }]);
    }, 1000);
    
    setInputText("");
  };

  return (
    <>
      <div className="mt-auto p-4 bg-indigo-50 border-t border-indigo-100">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium text-indigo-900">Need help with your task?</h3>
            <p className="text-indigo-700">Get instant support from your AI Buddy</p>
          </div>
          <button 
            onClick={handleChatToggle}
            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            I'm Stuck
          </button>
        </div>
      </div>
      
      {/* Simple Chat Pop-up */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-lg shadow-xl overflow-hidden z-50 flex flex-col" style={{ height: "400px" }}>
          {/* Chat Header */}
          <div className="bg-indigo-600 text-white p-3 flex justify-between items-center">
            <h3 className="font-medium">AI Task Buddy</h3>
            <button 
              onClick={handleChatToggle}
              className="text-white hover:text-gray-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          {/* Chat Messages */}
          <div className="flex-grow overflow-y-auto p-3 bg-gray-50">
            {messages.map((message, index) => (
              <div 
                key={index}
                className={`mb-3 ${message.isUser ? "text-right" : "text-left"}`}
              >
                <div 
                  className={`inline-block p-2 rounded-lg max-w-[80%] ${
                    message.isUser 
                      ? "bg-indigo-600 text-white" 
                      : "bg-white text-gray-800 border border-gray-200"
                  }`}
                >
                  {message.text.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < message.text.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat Input */}
          <form 
            onSubmit={handleSendMessage}
            className="border-t border-gray-200 p-3 flex"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition-colors"
              disabled={!inputText.trim()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default HelpFooter;