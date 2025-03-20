import React from "react";

export function InteractionPreferences({ preference, setPreference }) {
  const options = [
    {
      id: "audio",
      name: "Audio",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
          <line x1="12" y1="19" x2="12" y2="23"></line>
          <line x1="8" y1="23" x2="16" y2="23"></line>
        </svg>
      )
    },
    {
      id: "visual",
      name: "Visual",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      )
    },
    {
      id: "text",
      name: "Text",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="17" y1="10" x2="3" y2="10"></line>
          <line x1="21" y1="6" x2="3" y2="6"></line>
          <line x1="21" y1="14" x2="3" y2="14"></line>
          <line x1="17" y1="18" x2="3" y2="18"></line>
        </svg>
      )
    }
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Interaction Preferences</h2>
      <div className="grid grid-cols-3 gap-4">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => setPreference(option.id)}
            className={`flex flex-col items-center justify-center p-6 rounded-lg transition-all ${
              preference === option.id
                ? "bg-indigo-600 text-white"
                : "bg-gray-50 text-gray-700 hover:bg-gray-100"
            }`}
          >
            <div className="mb-3">
              {option.icon}
            </div>
            <span className="font-medium">{option.name}</span>
          </button>
        ))}
      </div>
      <p className="mt-6 text-gray-600">
        Choose how you'd prefer to interact with your AI Task Buddy. You can change this later in settings.
      </p>
    </div>
  );
}
