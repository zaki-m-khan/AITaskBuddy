import React from "react";

const TaskBreakdown = ({ steps, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin mr-2"></div>
          <span className="text-gray-600">Breaking down your task into accessible steps...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
        <div className="text-red-500">
          <p>Sorry, we couldn't break down this task. Please try again later.</p>
          <p className="text-sm mt-1">{error.message}</p>
        </div>
      </div>
    );
  }

  if (!steps || steps.length === 0) {
    return null;
  }

  return (
    <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm mt-4">
      <h3 className="text-lg font-semibold mb-4 text-indigo-700">Task Breakdown</h3>
      <ol className="list-decimal pl-5 space-y-3">
        {steps.map((step, index) => (
          <li key={index} className="text-gray-700">
            <p>{step}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TaskBreakdown; 