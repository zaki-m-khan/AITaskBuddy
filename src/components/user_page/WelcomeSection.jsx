import React from "react";

function WelcomeSection() {
  return (
    <section className="flex gap-4 items-center p-6 bg-white rounded-xl shadow-sm">
      <div className="flex flex-1 gap-4 items-center">
        <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 2C8.27 2 2 8.27 2 16C2 23.73 8.27 30 16 30C23.73 30 30 23.73 30 16C30 8.27 23.73 2 16 2ZM16 28C9.38 28 4 22.62 4 16C4 9.38 9.38 4 16 4C22.62 4 28 9.38 28 16C28 22.62 22.62 28 16 28Z"
              fill="#4F46E5"
            />
            <path
              d="M16 20C18.21 20 20 18.21 20 16C20 13.79 18.21 12 16 12C13.79 12 12 13.79 12 16C12 18.21 13.79 20 16 20Z"
              fill="#4F46E5"
            />
          </svg>
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">What would you like to do today?</h2>
          <p className="text-gray-600">I'll help you break it down into simple steps</p>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;