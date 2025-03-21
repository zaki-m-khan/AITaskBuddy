import React, { useState, useRef, useEffect } from "react";
import { mockChatResponse } from "../../services/chatService";

export function ChatModal({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi there! I'm your AI Task Buddy. How can I help you with your tasks today?"
    }
  ]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  
  // Debug logging
  useEffect(() => {
    console.log("ChatModal rendered, isOpen:", isOpen);
  }, [isOpen]);
  
  // Scroll to bottom of messages whenever messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!userInput.trim()) return;
    
    // Add user message to chat
    const newUserMessage = { role: "user", content: userInput };
    setMessages([...messages, newUserMessage]);
    setUserInput("");
    setIsLoading(true);
    
    try {
      // For development, use the mock service
      const mockResponse = await mockChatResponse([...messages, newUserMessage]);
      setMessages(prevMessages => [
        ...prevMessages, 
        { role: "assistant", content: mockResponse }
      ]);
      
      /* Comment out the API call until the server is set up
      // Call the AI service
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, newUserMessage],
        }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to get response from AI");
      }
      
      const data = await response.json();
      
      // Add AI response to chat
      setMessages(prevMessages => [
        ...prevMessages,
        { role: "assistant", content: data.response }
      ]);
      */
    } catch (error) {
      console.error("Error in chat:", error);
      // Add error message
      setMessages(prevMessages => [
        ...prevMessages,
        { 
          role: "assistant", 
          content: "I'm sorry, I'm having trouble responding right now. Please try again later."
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // If modal is not open, don't render anything
  if (!isOpen) {
    return null;
  }

  // Add visible debugging to confirm the modal is trying to render
  console.log("Rendering open modal");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl h-[80vh] flex flex-col">
        {/* Header */}
        <div className="bg-indigo-600 text-white px-6 py-4 rounded-t-lg flex justify-between items-center">
          <h2 className="text-xl font-semibold">AI Task Buddy Assistant</h2>
          <button 
            onClick={onClose}
            className="text-white hover:text-gray-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        {/* Messages area */}
        <div className="flex-grow p-6 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div 
                  className={`max-w-[75%] p-3 rounded-lg ${
                    message.role === "user" 
                      ? "bg-indigo-600 text-white rounded-br-none" 
                      : "bg-gray-100 text-gray-800 rounded-bl-none"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-lg rounded-bl-none">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
        
        {/* Input area */}
        <form 
          onSubmit={handleSendMessage}
          className="px-6 py-4 border-t border-gray-200 flex"
        >
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your message here..."
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition-colors disabled:bg-indigo-400"
            disabled={isLoading || !userInput.trim()}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
} 