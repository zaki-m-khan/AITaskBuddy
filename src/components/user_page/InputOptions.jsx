import React from "react";

function InputOptions() {
  return (
    <div className="flex gap-4 max-md:flex-wrap">
      <button className="flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 text-white rounded-lg flex-1">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 4H17V2H15V4H5V2H3V4H1C0.45 4 0 4.45 0 5V19C0 19.55 0.45 20 1 20H19C19.55 20 20 19.55 20 19V5C20 4.45 19.55 4 19 4ZM18 18H2V8H18V18Z" fill="white"/>
        </svg>
        <span>Text</span>
      </button>
      <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white text-gray-700 rounded-lg border border-gray-200 flex-1">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z" fill="#6B7280"/>
        </svg>
        <span>Audio</span>
      </button>
      <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white text-gray-700 rounded-lg border border-gray-200 flex-1">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.9 20 2 20H18C19.1 20 20 19.1 20 18V2C20 0.9 19.1 0 18 0ZM18 18H2V2H18V18ZM10 7C8.34 7 7 8.34 7 10C7 11.66 8.34 13 10 13C11.66 13 13 11.66 13 10C13 8.34 11.66 7 10 7Z" fill="#6B7280"/>
        </svg>
        <span>Visual</span>
      </button>
    </div>
  );
}

export default InputOptions; 