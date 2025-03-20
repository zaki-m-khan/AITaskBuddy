"use client";
import React from "react";

function Header({ onNavigate, userInfo, userRole, onLogout }) {
  return (
    <header className="flex justify-between items-center px-8 py-5 w-full bg-white shadow-sm">
      <div className="flex gap-3 items-center">
        <div>
          <svg
            width="38"
            height="30"
            viewBox="0 0 38 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 0L37.1865 30H0.813477L19 0Z"
              fill="#4F46E5"
            />
          </svg>
        </div>
        <div className="text-2xl font-bold text-indigo-600">AI Task Buddy</div>
      </div>
      <nav className="flex gap-6 items-center">
        <button className="text-lg text-gray-600 hover:text-indigo-600">
          Tasks
        </button>
        {/* Only show Dashboard link for managers */}
        {userRole === "manager" && (
          <button 
            className="text-lg text-gray-600 hover:text-indigo-600"
            onClick={() => onNavigate && onNavigate('dashboard')}
          >
            Dashboard
          </button>
        )}
        <button className="text-lg text-gray-600 hover:text-indigo-600">Settings</button>
        <button className="text-lg text-gray-600 hover:text-indigo-600">Help</button>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-indigo-100">
              <img
                src={userInfo?.photoURL || "https://ui-avatars.com/api/?name=User&background=4F46E5&color=fff"}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-medium text-gray-700">
              {userInfo?.name || userInfo?.email || "User"}
            </span>
          </div>
          
          <button 
            onClick={onLogout}
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Sign Out
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
