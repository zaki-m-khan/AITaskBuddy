import React from "react";

function Header({ onNavigate, onLogout, userInfo, userRole }) {
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
            className="w-[37.5px] h-[30px]"
          >
            <g clipPath="url(#clip0_5_2534)">
              <path
                d="M18.75 0C19.7871 0 20.625 0.837891 20.625 1.875V5.625H27.6562C29.9883 5.625 31.875 7.51172 31.875 9.84375V25.7812C31.875 28.1133 29.9883 30 27.6562 30H9.84375C7.51172 30 5.625 28.1133 5.625 25.7812V9.84375C5.625 7.51172 7.51172 5.625 9.84375 5.625H16.875V1.875C16.875 0.837891 17.7129 0 18.75 0ZM12.1875 22.5C11.6719 22.5 11.25 22.9219 11.25 23.4375C11.25 23.9531 11.6719 24.375 12.1875 24.375H14.0625C14.5781 24.375 15 23.9531 15 23.4375C15 22.9219 14.5781 22.5 14.0625 22.5H12.1875ZM17.8125 22.5C17.2969 22.5 16.875 22.9219 16.875 23.4375C16.875 23.9531 17.2969 24.375 17.8125 24.375H19.6875C20.2031 24.375 20.625 23.9531 20.625 23.4375C20.625 22.9219 20.2031 22.5 19.6875 22.5H17.8125ZM23.4375 22.5C22.9219 22.5 22.5 22.9219 22.5 23.4375C22.5 23.9531 22.9219 24.375 23.4375 24.375H25.3125C25.8281 24.375 26.25 23.9531 26.25 23.4375C26.25 22.9219 25.8281 22.5 25.3125 22.5H23.4375ZM15.4688 15C15.4688 14.3784 15.2218 13.7823 14.7823 13.3427C14.3427 12.9032 13.7466 12.6562 13.125 12.6562C12.5034 12.6562 11.9073 12.9032 11.4677 13.3427C11.0282 13.7823 10.7812 14.3784 10.7812 15C10.7812 15.6216 11.0282 16.2177 11.4677 16.6573C11.9073 17.0968 12.5034 17.3438 13.125 17.3438C13.7466 17.3438 14.3427 17.0968 14.7823 16.6573C15.2218 16.2177 15.4688 15.6216 15.4688 15ZM24.375 17.3438C24.9966 17.3438 25.5927 17.0968 26.0323 16.6573C26.4718 16.2177 26.7188 15.6216 26.7188 15C26.7188 14.3784 26.4718 13.7823 26.0323 13.3427C25.5927 12.9032 24.9966 12.6562 24.375 12.6562C23.7534 12.6562 23.1573 12.9032 22.7177 13.3427C22.2782 13.7823 22.0312 14.3784 22.0312 15C22.0312 15.6216 22.2782 16.2177 22.7177 16.6573C23.1573 17.0968 23.7534 17.3438 24.375 17.3438ZM2.8125 13.125H3.75V24.375H2.8125C1.25977 24.375 0 23.1152 0 21.5625V15.9375C0 14.3848 1.25977 13.125 2.8125 13.125ZM34.6875 13.125C36.2402 13.125 37.5 14.3848 37.5 15.9375V21.5625C37.5 23.1152 36.2402 24.375 34.6875 24.375H33.75V13.125H34.6875Z"
                fill="#4F46E5"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_5_2534">
                <path d="M0 0H37.5V30H0V0Z" fill="white"></path>
              </clipPath>
            </defs>
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-indigo-900">AI Task Buddy</h1>
      </div>
      <nav className="flex gap-6 items-center">
        {userRole === "manager" && (
          <button 
            className="text-lg text-gray-600 hover:text-indigo-600"
            onClick={() => onNavigate && onNavigate('dashboard')}
          >
            Dashboard
          </button>
        )}
        <button 
          className="text-lg text-gray-600 hover:text-indigo-600"
          onClick={() => onNavigate && onNavigate('tasks')}
        >
          Tasks
        </button>
        <button className="text-lg text-gray-600">Settings</button>
        <button className="text-lg text-gray-600">Help</button>
        <button 
          onClick={onLogout}
          className="flex items-center"
        >
          <img
            src={userInfo?.photoURL || "https://cdn.builder.io/api/v1/image/assets/TEMP/93e6aced1891ff5067e23f6e2dccc5011dcbf0ed"}
            alt="Profile"
            className="w-[40px] h-[40px] rounded-[9999px]"
          />
        </button>
      </nav>
    </header>
  );
}

export default Header;
