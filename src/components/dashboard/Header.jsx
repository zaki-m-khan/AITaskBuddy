import React from "react";

function Header({ onLogout, userInfo }) {
  return (
    <header className="bg-white shadow">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center">
          <h1 className="ml-3 text-xl font-semibold text-gray-900">AI Task Buddy</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            {userInfo?.photoURL ? (
              <img
                src={userInfo.photoURL}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            ) : (
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(userInfo?.name || 'User')}&background=random`}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            )}
            <div className="ml-2">
              <p className="text-sm font-medium text-gray-700">{userInfo?.name || 'User'}</p>
              <button 
                onClick={onLogout}
                className="text-xs text-gray-500 hover:text-indigo-600"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header; 