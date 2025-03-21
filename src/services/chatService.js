// Mock chat function for development (before backend integration)
export const mockChatResponse = async (messages) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const lastMessage = messages[messages.length - 1].content.toLowerCase();
  
  // Simple response logic based on keywords in the user's message
  if (lastMessage.includes("hello") || lastMessage.includes("hi") || lastMessage.includes("hey")) {
    return "Hello! How can I help you with your tasks today?";
  } 
  else if (lastMessage.includes("help") || lastMessage.includes("stuck")) {
    return "I'm here to help! Could you tell me more about what you're trying to accomplish? I can break down complex tasks into simpler steps.";
  }
  else if (lastMessage.includes("break down") || lastMessage.includes("steps")) {
    return "To break down a task, I need to know what you're working on. Could you describe the task you need help with?";
  }
  else if (lastMessage.includes("thank")) {
    return "You're welcome! Feel free to ask if you need any more help with your tasks.";
  }
  else if (lastMessage.includes("report") || lastMessage.includes("create report")) {
    return "Creating a report typically involves these steps:\n\n1. Gather all necessary data\n2. Organize your information into sections\n3. Create an outline with key points\n4. Write the introduction explaining the purpose\n5. Fill in details for each section\n6. Create any needed charts or visuals\n7. Write a conclusion or summary\n8. Proofread everything for accuracy\n9. Format the document professionally";
  }
  else if (lastMessage.includes("email") || lastMessage.includes("write email")) {
    return "Here's how to write an effective email:\n\n1. Create a clear subject line\n2. Start with an appropriate greeting\n3. Write a brief introduction\n4. Clearly state your purpose\n5. Provide necessary details or information\n6. Specify any action items or requests\n7. End with a professional closing\n8. Add your signature\n9. Proofread before sending";
  }
  else if (lastMessage.includes("presentation") || lastMessage.includes("slides")) {
    return "To create an effective presentation:\n\n1. Identify your main message and audience\n2. Create an outline of key points\n3. Design a simple, consistent slide template\n4. Use large, readable text\n5. Include relevant images or diagrams\n6. Limit text on each slide\n7. Create speaker notes for details\n8. Practice your delivery\n9. Prepare for potential questions";
  }
  else {
    return "I'm here to help break down tasks into manageable steps. Could you tell me more about what you're trying to accomplish or what specific task you need help with?";
  }
}; 