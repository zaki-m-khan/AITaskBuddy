import React from "react";

export function TopHeader({ userInfo, onLogout }) {
  return (
    <header className="bg-white border-b border-gray-200 px-8 h-16 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0L31.0557 28H0.944282L16 0Z" fill="#4F46E5"/>
        </svg>
        <span className="text-xl font-bold text-indigo-600">AI Task Buddy</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-100">
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
          className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
        >
          Sign out
        </button>
      </div>
    </header>
  );
}

export default TopHeader; 