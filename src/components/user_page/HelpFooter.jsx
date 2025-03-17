import React from "react";

function HelpFooter() {
  return (
    <div className="mt-auto p-4 bg-indigo-50 border-t border-indigo-100">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium text-indigo-900">Need help with your task?</h3>
          <p className="text-indigo-700">Get instant support from your AI Buddy</p>
        </div>
        <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg">
          I'm Stuck
        </button>
      </div>
    </div>
  );
}

export default HelpFooter; 