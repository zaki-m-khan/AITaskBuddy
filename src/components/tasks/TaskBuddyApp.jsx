"use client";
import React from "react";
import Header from "./Header";
import TaskForm from "./TaskForm";
import RecentTasks from "./RecentTasks";

const TaskBuddyApp = ({ onNavigate }) => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div className="min-h-screen">
        <Header onNavigate={onNavigate} />
        <main className="px-8 py-12 mx-auto my-0 max-w-screen-xl max-md:px-4 max-md:py-8">
          <div className="mb-6">
            <button 
              onClick={() => onNavigate('dashboard')}
              className="flex items-center text-indigo-600 hover:text-indigo-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Dashboard
            </button>
          </div>
          <TaskForm />
          <RecentTasks />
        </main>
      </div>
    </>
  );
};

export default TaskBuddyApp;
