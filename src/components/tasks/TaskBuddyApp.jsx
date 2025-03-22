"use client";
import React, { useState } from "react";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";
import { Layout } from "../shared/Layout";
import TaskBreakdown from "./TaskBreakdown";
import { mockBreakdownTask } from "../../services/aiService";

const TaskBuddyApp = ({ onNavigate, onLogout, userInfo, userRole }) => {
  const [quickTasks, setQuickTasks] = useState([
    { id: 1, title: "Sort incoming mail", icon: "📧" },
    { id: 2, title: "Pack orders", icon: "📦" },
    { id: 3, title: "Clean work area", icon: "🧹" }
  ]);

  const [assignedTasks, setAssignedTasks] = useState([
    { 
      id: 1, 
      title: "Organize filing cabinet", 
      completed: true, 
      completedAt: "today at 10:30 AM" 
    },
    { 
      id: 2, 
      title: "Stock inventory", 
      completed: true, 
      completedAt: "yesterday at 3:15 PM" 
    },
    { 
      id: 3, 
      title: "Update customer database", 
      completed: false, 
      dueDate: "Tomorrow" 
    },
    { 
      id: 4, 
      title: "Prepare weekly report", 
      completed: false, 
      dueDate: "Friday" 
    }
  ]);

  const [achievements, setAchievements] = useState([
    {
      id: 1,
      title: "Task Master",
      description: "Completed 10 tasks this week",
      icon: "🌟"
    }
  ]);

  const [inputMethod, setInputMethod] = useState("text");
  const [taskToBreakdown, setTaskToBreakdown] = useState(null);
  const [breakdownSteps, setBreakdownSteps] = useState([]);
  const [isBreakingDown, setIsBreakingDown] = useState(false);
  const [breakdownError, setBreakdownError] = useState(null);

  const handleAddTask = (task) => {
    const newTask = {
      id: Date.now(),
      title: task,
      completed: false,
      dueDate: "Today"
    };
    setAssignedTasks([...assignedTasks, newTask]);
  };

  const handleToggleTask = (taskId) => {
    setAssignedTasks(
      assignedTasks.map(task => 
        task.id === taskId 
          ? { 
              ...task, 
              completed: !task.completed, 
              completedAt: !task.completed ? `today at ${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}` : null 
            } 
          : task
      )
    );
  };

  const handleQuickTask = (taskTitle) => {
    handleAddTask(taskTitle);
  };

  const handleBreakdownTask = async (title, description, steps = null) => {
    setIsBreakingDown(true);
    setTaskToBreakdown({ title, description });
    setBreakdownError(null);
    
    try {
      if (steps) {
        // If steps are already provided (e.g., from document processing)
        setBreakdownSteps(steps);
      } else {
        // Use the real service in production
        const processedSteps = await mockBreakdownTask(title, description);
        setBreakdownSteps(processedSteps);
      }
    } catch (error) {
      console.error("Error breaking down task:", error);
      setBreakdownError(error);
    } finally {
      setIsBreakingDown(false);
    }
  };

  return (
    <Layout 
      userInfo={userInfo} 
      userRole={userRole} 
      onLogout={onLogout}
      currentPage="tasks"
      onNavigate={onNavigate}
    >
      <main className="max-w-screen-xl mx-auto">
        {/* Welcome Section */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-sm flex items-center gap-6">
          <div className="bg-indigo-100 rounded-full p-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 16V12" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8H12.01" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Welcome, there!</h2>
            <p className="text-gray-600">I'll help you break it down into simple steps</p>
          </div>
        </div>

        {/* Input Method Selector */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <button 
            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg ${inputMethod === 'text' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'}`}
            onClick={() => setInputMethod('text')}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.6667 5H3.33333C2.8731 5 2.5 5.3731 2.5 5.83333V14.1667C2.5 14.6269 2.8731 15 3.33333 15H16.6667C17.1269 15 17.5 14.6269 17.5 14.1667V5.83333C17.5 5.3731 17.1269 5 16.6667 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.66667 8.33325H13.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.66667 11.6667H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Text
          </button>
          <button 
            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg ${inputMethod === 'audio' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'}`}
            onClick={() => setInputMethod('audio')}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 1.66675V18.3334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14.1667 5.83325H7.91667C7.14312 5.83325 6.40125 6.13999 5.85427 6.68697C5.30729 7.23395 5.00055 7.97582 5.00055 8.74937C5.00055 9.52292 5.30729 10.2648 5.85427 10.8118C6.40125 11.3587 7.14312 11.6655 7.91667 11.6655H12.0833C12.8569 11.6655 13.5987 11.9722 14.1457 12.5192C14.6927 13.0662 15 13.808 15 14.5816C15 15.3551 14.6927 16.097 14.1457 16.644C13.5987 17.191 12.8569 17.4977 12.0833 17.4977H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Audio
          </button>
          <button 
            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg ${inputMethod === 'visual' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'}`}
            onClick={() => setInputMethod('visual')}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.6667 2.5H3.33333C2.8731 2.5 2.5 2.8731 2.5 3.33333V16.6667C2.5 17.1269 2.8731 17.5 3.33333 17.5H16.6667C17.1269 17.5 17.5 17.1269 17.5 16.6667V3.33333C17.5 2.8731 17.1269 2.5 16.6667 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.5 8.33325C7.96024 8.33325 8.33333 7.96016 8.33333 7.49992C8.33333 7.03968 7.96024 6.66659 7.5 6.66659C7.03976 6.66659 6.66667 7.03968 6.66667 7.49992C6.66667 7.96016 7.03976 8.33325 7.5 8.33325Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17.5 12.5L13.3333 8.33337L3.33333 18.3334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Visual
          </button>
        </div>

        {/* Task Input */}
        <div className="mb-8">
          <TaskForm onAddTask={handleAddTask} inputMethod={inputMethod} onTaskBreakdown={handleBreakdownTask} />
        </div>

        {/* Quick Tasks */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Tasks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickTasks.map(task => (
              <button 
                key={task.id}
                onClick={() => handleQuickTask(task.title)}
                className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className="text-xl">{task.icon}</span>
                <span className="text-gray-700">{task.title}</span>
              </button>
            ))}
            <button className="flex items-center justify-center gap-2 p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors text-indigo-600">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 4.16675V15.8334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.16669 10H15.8334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Add new task
            </button>
          </div>
        </div>

        {/* Assigned Tasks */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Assigned Tasks</h2>
          <TaskList tasks={assignedTasks} onToggle={handleToggleTask} />
        </div>

        {/* Two Column Layout for Achievements and Growth */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Recent Achievements */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Achievements</h2>
            {achievements.map(achievement => (
              <div key={achievement.id} className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{achievement.icon}</span>
                  <div>
                    <h3 className="font-medium text-gray-800">{achievement.title}</h3>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Growth Garden */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Growth Garden</h2>
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 h-[200px] flex items-end justify-center">
              <div className="flex items-end gap-4">
                <div className="w-8 bg-green-500 h-24 rounded-t-lg"></div>
                <div className="w-8 bg-green-500 h-36 rounded-t-lg"></div>
                <div className="w-8 bg-green-500 h-28 rounded-t-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 bg-indigo-50 p-6 rounded-lg border border-indigo-100">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium text-gray-800">Need help with your task?</h3>
              <p className="text-sm text-gray-600">Get instant support from your AI Buddy</p>
            </div>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              I'm Stuck
            </button>
          </div>
        </div>

        {taskToBreakdown && (
          <TaskBreakdown 
            steps={breakdownSteps} 
            isLoading={isBreakingDown} 
            error={breakdownError} 
          />
        )}
      </main>
    </Layout>
  );
};

export default TaskBuddyApp;
