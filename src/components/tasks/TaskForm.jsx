"use client";
import React, { useState } from "react";
import InputOption from "./InputOption";
import QuickTemplateButton from "./QuickTemplateButton";

export function TaskForm({ onAddTask, inputMethod }) {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      onAddTask(taskText);
      setTaskText("");
    }
  };

  const typeIcon = (
    <svg
      width="28"
      height="24"
      viewBox="0 0 28 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_5_2376)">
        <path
          d="M3.64062 3C1.98594 3 0.640625 4.34531 0.640625 6V18C0.640625 19.6547 1.98594 21 3.64062 21H24.6406C26.2953 21 27.6406 19.6547 27.6406 18V6C27.6406 4.34531 26.2953 3 24.6406 3H3.64062ZM4.39062 6H5.89062C6.30312 6 6.64062 6.3375 6.64062 6.75V8.25C6.64062 8.6625 6.30312 9 5.89062 9H4.39062C3.97813 9 3.64062 8.6625 3.64062 8.25V6.75C3.64062 6.3375 3.97813 6 4.39062 6ZM3.64062 11.25C3.64062 10.8375 3.97813 10.5 4.39062 10.5H5.89062C6.30312 10.5 6.64062 10.8375 6.64062 11.25V12.75C6.64062 13.1625 6.30312 13.5 5.89062 13.5H4.39062C3.97813 13.5 3.64062 13.1625 3.64062 12.75V11.25ZM4.39062 15H5.89062C6.30312 15 6.64062 15.3375 6.64062 15.75V17.25C6.64062 17.6625 6.30312 18 5.89062 18H4.39062C3.97813 18 3.64062 17.6625 3.64062 17.25V15.75C3.64062 15.3375 3.97813 15 4.39062 15ZM8.14062 6.75C8.14062 6.3375 8.47813 6 8.89062 6H10.3906C10.8031 6 11.1406 6.3375 11.1406 6.75V8.25C11.1406 8.6625 10.8031 9 10.3906 9H8.89062C8.47813 9 8.14062 8.6625 8.14062 8.25V6.75ZM8.89062 10.5H10.3906C10.8031 10.5 11.1406 10.8375 11.1406 11.25V12.75C11.1406 13.1625 10.8031 13.5 10.3906 13.5H8.89062C8.47813 13.5 8.14062 13.1625 8.14062 12.75V11.25C8.14062 10.8375 8.47813 10.5 8.89062 10.5ZM8.14062 15.75C8.14062 15.3375 8.47813 15 8.89062 15H19.3906C19.8031 15 20.1406 15.3375 20.1406 15.75V17.25C20.1406 17.6625 19.8031 18 19.3906 18H8.89062C8.47813 18 8.14062 17.6625 8.14062 17.25V15.75ZM13.3906 6H14.8906C15.3031 6 15.6406 6.3375 15.6406 6.75V8.25C15.6406 8.6625 15.3031 9 14.8906 9H13.3906C12.9781 9 12.6406 8.6625 12.6406 8.25V6.75C12.6406 6.3375 12.9781 6 13.3906 6ZM12.6406 11.25C12.6406 10.8375 12.9781 10.5 13.3906 10.5H14.8906C15.3031 10.5 15.6406 10.8375 15.6406 11.25V12.75C15.6406 13.1625 15.3031 13.5 14.8906 13.5H13.3906C12.9781 13.5 12.6406 13.1625 12.6406 12.75V11.25ZM17.8906 6H19.3906C19.8031 6 20.1406 6.3375 20.1406 6.75V8.25C20.1406 8.6625 19.8031 9 19.3906 9H17.8906C17.4781 9 17.1406 8.6625 17.1406 8.25V6.75C17.1406 6.3375 17.4781 6 17.8906 6ZM17.1406 11.25C17.1406 10.8375 17.4781 10.5 17.8906 10.5H19.3906C19.8031 10.5 20.1406 10.8375 20.1406 11.25V12.75C20.1406 13.1625 19.8031 13.5 19.3906 13.5H17.8906C17.4781 13.5 17.1406 13.1625 17.1406 12.75V11.25ZM22.3906 6H23.8906C24.3031 6 24.6406 6.3375 24.6406 6.75V8.25C24.6406 8.6625 24.3031 9 23.8906 9H22.3906C21.9781 9 21.6406 8.6625 21.6406 8.25V6.75C21.6406 6.3375 21.9781 6 22.3906 6ZM21.6406 11.25C21.6406 10.8375 21.9781 10.5 22.3906 10.5H23.8906C24.3031 10.5 24.6406 10.8375 24.6406 11.25V12.75C24.6406 13.1625 24.3031 13.5 23.8906 13.5H22.3906C21.9781 13.5 21.6406 13.1625 21.6406 12.75V11.25ZM22.3906 15H23.8906C24.3031 15 24.6406 15.3375 24.6406 15.75V17.25C24.6406 17.6625 24.3031 18 23.8906 18H22.3906C21.9781 18 21.6406 17.6625 21.6406 17.25V15.75C21.6406 15.3375 21.9781 15 22.3906 15Z"
          fill="#4F46E5"
        />
      </g>
      <defs>
        <clipPath id="clip0_5_2376">
          <path d="M0.640625 0H27.6406V24H0.640625V0Z" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  const speakIcon = (
    <svg
      width="19"
      height="24"
      viewBox="0 0 19 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_5_2381)">
        <path
          d="M9.07812 0C6.59375 0 4.57812 2.01562 4.57812 4.5V12C4.57812 14.4844 6.59375 16.5 9.07812 16.5C11.5625 16.5 13.5781 14.4844 13.5781 12V4.5C13.5781 2.01562 11.5625 0 9.07812 0ZM3.07812 10.125C3.07812 9.50156 2.57656 9 1.95312 9C1.32969 9 0.828125 9.50156 0.828125 10.125V12C0.828125 16.1766 3.93125 19.6266 7.95312 20.175V21.75H5.70312C5.07969 21.75 4.57812 22.2516 4.57812 22.875C4.57812 23.4984 5.07969 24 5.70312 24H9.07812H12.4531C13.0766 24 13.5781 23.4984 13.5781 22.875C13.5781 22.2516 13.0766 21.75 12.4531 21.75H10.2031V20.175C14.225 19.6266 17.3281 16.1766 17.3281 12V10.125C17.3281 9.50156 16.8266 9 16.2031 9C15.5797 9 15.0781 9.50156 15.0781 10.125V12C15.0781 15.3141 12.3922 18 9.07812 18C5.76406 18 3.07812 15.3141 3.07812 12V10.125Z"
          fill="#4F46E5"
        />
      </g>
      <defs>
        <clipPath id="clip0_5_2381">
          <path d="M0.078125 0H18.0781V24H0.078125V0Z" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  const visualIcon = (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_5_2386)">
        <path
          d="M21.0625 3.75C21.475 3.75 21.8125 4.0875 21.8125 4.5V19.4906L21.5781 19.1859L15.2031 10.9359C14.9922 10.6594 14.6594 10.5 14.3125 10.5C13.9656 10.5 13.6375 10.6594 13.4219 10.9359L9.53125 15.9703L8.10156 13.9688C7.89062 13.6734 7.55312 13.5 7.1875 13.5C6.82188 13.5 6.48438 13.6734 6.27344 13.9734L2.52344 19.2234L2.3125 19.5141V19.5V4.5C2.3125 4.0875 2.65 3.75 3.0625 3.75H21.0625ZM3.0625 1.5C1.40781 1.5 0.0625 2.84531 0.0625 4.5V19.5C0.0625 21.1547 1.40781 22.5 3.0625 22.5H21.0625C22.7172 22.5 24.0625 21.1547 24.0625 19.5V4.5C24.0625 2.84531 22.7172 1.5 21.0625 1.5H3.0625ZM6.8125 10.5C7.10797 10.5 7.40056 10.4418 7.67354 10.3287C7.94652 10.2157 8.19456 10.0499 8.40349 9.84099C8.61242 9.63206 8.77816 9.38402 8.89123 9.11104C9.0043 8.83806 9.0625 8.54547 9.0625 8.25C9.0625 7.95453 9.0043 7.66194 8.89123 7.38896C8.77816 7.11598 8.61242 6.86794 8.40349 6.65901C8.19456 6.45008 7.94652 6.28434 7.67354 6.17127C7.40056 6.0582 7.10797 6 6.8125 6C6.51703 6 6.22444 6.0582 5.95146 6.17127C5.67848 6.28434 5.43044 6.45008 5.22151 6.65901C5.01258 6.86794 4.84684 7.11598 4.73377 7.38896C4.6207 7.66194 4.5625 7.95453 4.5625 8.25C4.5625 8.54547 4.6207 8.83806 4.73377 9.11104C4.84684 9.38402 5.01258 9.63206 5.22151 9.84099C5.43044 10.0499 5.67848 10.2157 5.95146 10.3287C6.22444 10.4418 6.51703 10.5 6.8125 10.5Z"
          fill="#4F46E5"
        />
      </g>
      <defs>
        <clipPath id="clip0_5_2386">
          <path d="M0.0625 0H24.0625V24H0.0625V0Z" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {inputMethod === 'text' && (
        <div className="relative">
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Describe your task..."
            className="w-full p-4 pr-12 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-indigo-600 hover:text-indigo-800"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      )}

      {inputMethod === 'audio' && (
        <div className="bg-white p-6 rounded-lg border border-gray-200 flex flex-col items-center justify-center">
          <button
            type="button"
            className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C11.0111 2 10.0444 2.39933 9.31864 3.10961C8.59289 3.81989 8.17713 4.75633 8.17713 5.73333V11.6C8.17713 12.577 8.59289 13.5134 9.31864 14.2237C10.0444 14.934 11.0111 15.3333 12 15.3333C12.9889 15.3333 13.9556 14.934 14.6814 14.2237C15.4071 13.5134 15.8229 12.577 15.8229 11.6V5.73333C15.8229 4.75633 15.4071 3.81989 14.6814 3.10961C13.9556 2.39933 12.9889 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19 10.6667V11.6C19 13.7885 18.1045 15.8669 16.5104 17.4246C14.9163 18.9824 12.7893 19.8571 10.5714 19.8571" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 10.6667V11.6C5 13.7885 5.89543 15.8669 7.48959 17.4246C9.08374 18.9824 11.2107 19.8571 13.4286 19.8571" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 19.8571V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.17713 22H15.8229" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <p className="text-gray-600">Tap to record</p>
        </div>
      )}

      {inputMethod === 'visual' && (
        <div className="bg-white p-6 rounded-lg border border-gray-200 flex flex-col items-center justify-center">
          <button
            type="button"
            className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 8H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H18C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V18C21 18.7956 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7956 21 18 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 16L8 11C8.928 10.107 10.072 10.107 11 11L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 14L15 13C15.928 12.107 17.072 12.107 18 13L21 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <p className="text-gray-600">Upload an image</p>
        </div>
      )}
    </form>
  );
}
