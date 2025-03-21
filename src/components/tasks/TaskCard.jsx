"use client";
import React, { useState } from "react";

const TaskCard = ({ status, timeAgo, title, description, duration, onBreakdownTask }) => {
  const [isBreakingDown, setIsBreakingDown] = useState(false);

  const handleBreakdownClick = () => {
    setIsBreakingDown(true);
    onBreakdownTask(title, description)
      .finally(() => setIsBreakingDown(false));
  };

  return (
    <article className="p-6 bg-white rounded-xl border border-gray-100 border-solid shadow-[0_1px_2px_rgba(0,0,0,0.05)] w-[596px] max-md:w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="px-3 py-1.5 text-sm text-emerald-600 bg-emerald-100 rounded-full">
          {status}
        </div>
        <div className="flex items-center gap-2">
          <div className="text-sm text-gray-500">{timeAgo}</div>
          <button 
            onClick={handleBreakdownClick}
            className="text-indigo-600 hover:text-indigo-800 transition-colors"
            title="Break down task into steps"
            disabled={isBreakingDown}
          >
            {isBreakingDown ? (
              <div className="w-4 h-4 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M18 8c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4zM6 15c0-2.2 1.8-4 4-4M13 19c0-2.2 1.8-4 4-4"></path>
                <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
                <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
                <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
                <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      <h3 className="mb-2 text-lg text-gray-800">{title}</h3>
      <p className="mb-4 text-base text-gray-600">{description}</p>
      <div className="flex gap-2 items-center">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="time-icon"
        >
          <g clipPath="url(#clip0_5_2359)">
            <path
              d="M14.5 8C14.5 9.72391 13.8152 11.3772 12.5962 12.5962C11.3772 13.8152 9.72391 14.5 8 14.5C6.27609 14.5 4.62279 13.8152 3.40381 12.5962C2.18482 11.3772 1.5 9.72391 1.5 8C1.5 6.27609 2.18482 4.62279 3.40381 3.40381C4.62279 2.18482 6.27609 1.5 8 1.5C9.72391 1.5 11.3772 2.18482 12.5962 3.40381C13.8152 4.62279 14.5 6.27609 14.5 8ZM0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8ZM7.25 3.75V8C7.25 8.25 7.375 8.48438 7.58437 8.625L10.5844 10.625C10.9281 10.8562 11.3938 10.7625 11.625 10.4156C11.8562 10.0687 11.7625 9.60625 11.4156 9.375L8.75 7.6V3.75C8.75 3.33437 8.41562 3 8 3C7.58437 3 7.25 3.33437 7.25 3.75Z"
              fill="#4F46E5"
            />
          </g>
          <defs>
            <clipPath id="clip0_5_2359">
              <path d="M0 0H16V16H0V0Z" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span className="text-base text-indigo-600">{duration}</span>
      </div>
    </article>
  );
};

export default TaskCard;
