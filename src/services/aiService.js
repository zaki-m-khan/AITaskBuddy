// Service to handle AI task breakdown functionality

const API_URL = "/api/breakdown"; // You'll need to create this endpoint

export const breakdownTask = async (title, description) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data.steps;
  } catch (error) {
    console.error("Error breaking down task:", error);
    throw error;
  }
};

// For development/testing purposes, we can use a mock function
export const mockBreakdownTask = async (title, description) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Return sample breakdown steps based on the task title
  let steps = [];
  
  if (title.toLowerCase().includes("update") || title.toLowerCase().includes("database")) {
    steps = [
      "Log in to the customer database system",
      "Open the customer records section",
      "For each new customer, enter their information in all required fields",
      "For existing customers, update any changed information",
      "Double-check all entries for accuracy",
      "Save your changes",
      "Log out of the system when finished"
    ];
  } else if (title.toLowerCase().includes("report")) {
    steps = [
      "Gather all necessary data for the report",
      "Open the reporting template",
      "Fill in the date range and basic information",
      "Input the key metrics and data points",
      "Write a brief summary of the findings",
      "Add any charts or visual aids",
      "Proofread the document for errors",
      "Save and submit to your supervisor"
    ];
  } else if (title.toLowerCase().includes("mail")) {
    steps = [
      "Collect all incoming mail from the designated area",
      "Sort mail by department or recipient",
      "Open time-sensitive mail first",
      "For each piece, determine if immediate action is needed",
      "Place sorted mail in the appropriate distribution boxes",
      "Log any important or registered mail",
      "Deliver urgent items personally if needed"
    ];
  } else {
    steps = [
      `First, understand what "${title}" requires by reading any instructions.`,
      "Gather all necessary materials or information needed.",
      "Set aside dedicated time without distractions.",
      "Break the task into smaller parts if needed.",
      "Complete each part one at a time.",
      "Review your work to make sure nothing was missed.",
      "Ask for help if you're stuck on any step."
    ];
  }
  
  return steps;
}; 