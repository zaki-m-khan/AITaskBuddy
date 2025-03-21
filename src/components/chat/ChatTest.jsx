import React, { useState } from "react";
import { ChatModal } from "./ChatModal";

export function ChatTest() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Chat Test Page</h1>
      <button 
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
        onClick={() => setIsOpen(true)}
      >
        Open Chat
      </button>
      
      <ChatModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
} 