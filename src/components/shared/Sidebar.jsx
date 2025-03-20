import React from "react";

export function Sidebar({ currentPage, userRole, onNavigate }) {
  const navigation = [
    {
      name: "Dashboard",
      path: "dashboard",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      allowedRoles: ["manager"]
    },
    {
      name: "Tasks",
      path: "tasks",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      allowedRoles: ["manager", "employee"]
    },
    {
      name: "Profile",
      path: "profile",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      allowedRoles: ["manager", "employee"]
    }
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 0L31.0557 28H0.944282L16 0Z" fill="#4F46E5"/>
          </svg>
          <span className="text-xl font-bold text-gray-900">AI Task Buddy</span>
        </div>
        <h3 className="text-xs uppercase text-gray-500 font-medium mb-4">Navigation</h3>
        <nav className="space-y-1">
          {navigation.map((item) => 
            item.allowedRoles.includes(userRole) && (
              <button
                key={item.name}
                onClick={() => onNavigate(item.path)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg w-full text-left ${
                  currentPage === item.name.toLowerCase()
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span className={currentPage === item.name.toLowerCase() ? 'text-indigo-600' : 'text-gray-500'}>
                  {item.icon}
                </span>
                {item.name}
              </button>
            )
          )}
        </nav>
      </div>
    </div>
  );
}

export default Sidebar; 