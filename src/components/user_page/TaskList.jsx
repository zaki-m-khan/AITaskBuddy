import React from "react";

function TaskList() {
  const tasks = [
    {
      title: "Organize filing cabinet",
      completed: true,
      time: "today at 10:30 AM"
    },
    {
      title: "Stock inventory",
      completed: true,
      time: "yesterday at 3:15 PM"
    }
  ];

  return (
    <div className="mt-8">
      <h2 className="mb-4 text-lg font-semibold text-gray-800">Assigned Tasks</h2>
      <div className="space-y-4">
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
      </div>
    </div>
  );
}

function TaskItem({ task }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 8.25L2.25 6L1.5 6.75L4.5 9.75L10.5 3.75L9.75 3L4.5 8.25Z" fill="#10B981"/>
        </svg>
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-gray-800">{task.title}</h3>
        <p className="text-sm text-gray-500">Completed {task.time}</p>
      </div>
      <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4ZM8 6C6.9 6 6 6.9 6 8C6 9.1 6.9 10 8 10C9.1 10 10 9.1 10 8C10 6.9 9.1 6 8 6ZM8 12C6.9 12 6 12.9 6 14C6 15.1 6.9 16 8 16C9.1 16 10 15.1 10 14C10 12.9 9.1 12 8 12Z" fill="currentColor"/>
        </svg>
      </button>
    </div>
  );
}

export default TaskList; 