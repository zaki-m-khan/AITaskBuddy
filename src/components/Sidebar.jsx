import React from "react";

function Sidebar({ onNavigate }) {
  return (
    <aside className="w-64 bg-white shadow-md p-4">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Navigation</h2>
      </div>
      <nav>
        <ul className="space-y-2">
          <li>
            <button 
              onClick={() => onNavigate('dashboard')}
              className="flex items-center w-full p-2 text-gray-700 rounded hover:bg-indigo-50 hover:text-indigo-600"
            >
              <span>Dashboard</span>
            </button>
          </li>
          <li>
            <button 
              onClick={() => onNavigate('tasks')}
              className="flex items-center w-full p-2 text-gray-700 rounded hover:bg-indigo-50 hover:text-indigo-600"
            >
              <span>Tasks</span>
            </button>
          </li>
          <li>
            <button 
              onClick={() => onNavigate('user')}
              className="flex items-center w-full p-2 text-gray-700 rounded hover:bg-indigo-50 hover:text-indigo-600"
            >
              <span>Profile</span>
            </button>
          </li>
          <li>
            <button 
              onClick={() => onNavigate('tribalKnowledge')}
              className="flex items-center w-full p-2 text-gray-700 rounded hover:bg-indigo-50 hover:text-indigo-600"
            >
              <span>Tribal Knowledge</span>
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar; 