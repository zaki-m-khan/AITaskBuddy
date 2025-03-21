import React, { useState } from "react";
import { mockBreakdownTask } from "../../services/aiService";

export function TaskList({ tasks, onToggle }) {
  const [taskBreakdowns, setTaskBreakdowns] = useState({});
  const [loadingTaskId, setLoadingTaskId] = useState(null);

  const handleBreakdownClick = async (taskId, title) => {
    setLoadingTaskId(taskId);
    
    try {
      // Use the real service in production
      const steps = await mockBreakdownTask(title, "");
      setTaskBreakdowns({
        ...taskBreakdowns,
        [taskId]: steps
      });
    } catch (error) {
      console.error("Error breaking down task:", error);
    } finally {
      setLoadingTaskId(null);
    }
  };

  // Separate tasks into completed and pending
  const completedTasks = tasks.filter(task => task.completed);
  const pendingTasks = tasks.filter(task => !task.completed);

  const renderTask = (task) => {
    const isLoading = loadingTaskId === task.id;
    const hasBreakdown = taskBreakdowns[task.id];
    
    return (
      <div key={task.id} className="border-b last:border-b-0">
        {/* Task row */}
        <div className="p-4 flex items-center">
          <button 
            onClick={() => onToggle(task.id)}
            className={`w-5 h-5 rounded-full mr-3 flex-shrink-0 ${
              task.completed 
                ? "bg-green-500 text-white flex items-center justify-center" 
                : "border-2 border-gray-300"
            }`}
          >
            {task.completed && (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
          <div className="flex-grow">
            <div className="flex justify-between items-center">
              <div>
                <p className={`text-base ${task.completed ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
                  {task.title}
                </p>
                {task.completed ? (
                  <p className="text-sm text-gray-400">Completed {task.completedAt}</p>
                ) : (
                  <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
                )}
              </div>
              <div className="flex items-center">
                <button 
                  onClick={() => handleBreakdownClick(task.id, task.title)}
                  className="text-indigo-600 hover:text-indigo-800 transition-colors p-1"
                  title="Break down task into simple steps"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="18" 
                      height="18"
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M15 4V2"></path>
                      <path d="M15 16v-2"></path>
                      <path d="M8 9h2"></path>
                      <path d="M20 9h2"></path>
                      <path d="M17.8 11.8L19 13"></path>
                      <path d="M15 9h0"></path>
                      <path d="M17.8 6.2L19 5"></path>
                      <path d="M3 21l9-9"></path>
                      <path d="M12.2 6.2L11 5"></path>
                    </svg>
                  )}
                </button>
                <button className="text-gray-400 hover:text-gray-600 transition-colors p-1 ml-2">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 2.5V12.5M2.5 7.5H12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Task breakdown (if available) */}
        {hasBreakdown && (
          <div className="mx-4 mb-4 p-4 bg-indigo-50 rounded-md">
            <h4 className="text-sm font-medium text-indigo-700 mb-2">Task Breakdown:</h4>
            <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
              {taskBreakdowns[task.id].map((step, index) => (
                <li key={index}>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {/* Pending Tasks */}
      {pendingTasks.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {pendingTasks.map(renderTask)}
        </div>
      )}

      {/* Completed Tasks */}
      {completedTasks.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {completedTasks.map(renderTask)}
        </div>
      )}
    </div>
  );
} 