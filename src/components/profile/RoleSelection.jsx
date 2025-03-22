"use client";
import React from "react";

export function RoleSelection({ userRole, setUserRole }) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-4">Select Your Role</h3>
      <p className="text-gray-600 mb-6">
        Choose your role to customize your experience. Your role determines what features you can access.
      </p>
      
      <div className="flex flex-col gap-6">
        <div 
          className={`p-6 border-2 rounded-xl cursor-pointer flex items-start gap-4 transition-all ${
            userRole === "employee" ? "border-indigo-600 bg-indigo-50" : "border-gray-200 hover:border-indigo-300"
          }`}
          onClick={() => setUserRole("employee")}
        >
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center shrink-0">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#4F46E5"/>
            </svg>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-1">Employee</h4>
            <p className="text-gray-600">
              As an employee, you can:
            </p>
            <ul className="list-disc ml-5 mt-2 text-gray-600">
              <li>View and complete your assigned tasks</li>
              <li>Track your progress and achievements</li>
              <li>Receive guidance from AI Task Buddy</li>
              <li>Communicate with your manager</li>
            </ul>
          </div>
        </div>
        
        <div 
          className={`p-6 border-2 rounded-xl cursor-pointer flex items-start gap-4 transition-all ${
            userRole === "manager" ? "border-indigo-600 bg-indigo-50" : "border-gray-200 hover:border-indigo-300"
          }`}
          onClick={() => setUserRole("manager")}
        >
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center shrink-0">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 6.34 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="#4F46E5"/>
            </svg>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-1">Job Coach</h4>
            <p className="text-gray-600">
              As a job coach, you can:
            </p>
            <ul className="list-disc ml-5 mt-2 text-gray-600">
              <li>Access the dashboard to monitor team progress</li>
              <li>Create and assign tasks to employees</li>
              <li>Track employee performance and achievements</li>
              <li>Provide feedback and support to your team</li>
              <li>Generate reports and analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 