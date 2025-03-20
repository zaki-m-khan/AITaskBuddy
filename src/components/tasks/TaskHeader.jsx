import React from "react";

function TaskHeader({ onNavigate, userInfo, userRole }) {
  return (
    <header className="flex items-center justify-between p-6 bg-white border-b">
      <div className="flex items-center gap-4">
        {/* Only show the back to dashboard link for managers */}
        {userRole === "manager" && (
          <button 
            onClick={() => onNavigate('dashboard')} 
            className="flex items-center text-indigo-600 hover:text-indigo-800"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.8332 10H4.1665" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.99984 15.8334L4.1665 10.0001L9.99984 4.16675" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="ml-2">Back to Dashboard</span>
          </button>
        )}
        
        <h1 className="text-xl font-semibold">My Tasks</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="p-2 text-gray-600 hover:text-indigo-600">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 6.66675V10.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 13.3333H10.0083" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <button className="p-2 text-gray-600 hover:text-indigo-600">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 8.33325C15 6.56525 14.2976 4.86953 13.0474 3.61929C11.7971 2.36905 10.1014 1.66659 8.33333 1.66659C6.56522 1.66659 4.86953 2.36905 3.61929 3.61929C2.36905 4.86953 1.66667 6.56525 1.66667 8.33325C1.66667 15.8333 5.83333 18.3333 8.33333 18.3333C9.16667 18.3333 10 18.1666 10.8333 17.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.3333 13.3334C18.3333 13.7754 18.2455 14.2114 18.0768 14.6114C17.9081 15.0115 17.662 15.3658 17.3536 15.6508C17.0451 15.9358 16.6809 16.1547 16.2759 16.2941C15.871 16.4335 15.4361 16.4903 15 16.4614C13.8333 16.4614 12.9167 15.8334 12.5 15.0001L12.0833 13.7501L13.3333 13.3334C14.1667 12.9167 14.7917 11.9834 14.7917 10.8334C14.7917 10.3973 14.7349 9.96238 14.5955 9.55744C14.4561 9.1525 14.2372 8.78824 13.9522 8.47979C13.6672 8.17134 13.3129 7.92529 12.9129 7.75661C12.5128 7.58793 12.0768 7.50012 11.6348 7.50012" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
          <img 
            src={userInfo?.photoURL || "https://via.placeholder.com/32"} 
            alt="User" 
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </header>
  );
}

export default TaskHeader; 