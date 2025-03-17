import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">AITaskBuddy</h1>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </button>
          <div className="h-8 w-8 rounded-full bg-indigo-200 flex items-center justify-center">
            <span className="text-sm font-medium text-indigo-600">JD</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 