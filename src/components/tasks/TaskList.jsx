import React from "react";

export function TaskList({ tasks, onToggle }) {
  // Separate tasks into completed and pending
  const completedTasks = tasks.filter(task => task.completed);
  const pendingTasks = tasks.filter(task => !task.completed);

  return (
    <div className="space-y-4">
      {/* Pending Tasks */}
      {pendingTasks.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {pendingTasks.map(task => (
            <div key={task.id} className="p-4 border-b last:border-b-0 flex items-center">
              <button 
                onClick={() => onToggle(task.id)}
                className="w-5 h-5 rounded-full border-2 border-gray-300 mr-3 flex-shrink-0"
              ></button>
              <div className="flex-grow">
                <p className="text-gray-800">{task.title}</p>
                {task.dueDate && (
                  <p className="text-xs text-gray-500">Due: {task.dueDate}</p>
                )}
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 4V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 8H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Completed Tasks */}
      {completedTasks.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {completedTasks.map(task => (
            <div key={task.id} className="p-4 border-b last:border-b-0 flex items-center">
              <button 
                onClick={() => onToggle(task.id)}
                className="w-5 h-5 rounded-full bg-green-500 text-white mr-3 flex items-center justify-center flex-shrink-0"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="flex-grow">
                <p className="text-gray-500 line-through">{task.title}</p>
                {task.completedAt && (
                  <p className="text-xs text-gray-400">Completed {task.completedAt}</p>
                )}
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 4H3.33333H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5.33334 4V2.66667C5.33334 2.31305 5.47381 1.97391 5.72386 1.72386C5.97391 1.47381 6.31305 1.33334 6.66667 1.33334H9.33334C9.68696 1.33334 10.0261 1.47381 10.2761 1.72386C10.5262 1.97391 10.6667 2.31305 10.6667 2.66667V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.6667 4V13.3333C12.6667 13.687 12.5262 14.0261 12.2761 14.2761C12.0261 14.5262 11.687 14.6667 11.3333 14.6667H4.66667C4.31305 14.6667 3.97391 14.5262 3.72386 14.2761C3.47381 14.0261 3.33334 13.687 3.33334 13.3333V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 