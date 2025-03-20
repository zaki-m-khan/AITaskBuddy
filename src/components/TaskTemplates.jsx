import React from "react";

function TaskTemplates() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Task Templates</h2>
      <div className="space-y-4">
        <div className="p-3 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer">
          <h3 className="font-medium text-gray-800">Job Application Process</h3>
          <p className="text-sm text-gray-600">Template for tracking job applications</p>
        </div>
        <div className="p-3 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer">
          <h3 className="font-medium text-gray-800">Interview Preparation</h3>
          <p className="text-sm text-gray-600">Steps to prepare for job interviews</p>
        </div>
        <div className="p-3 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer">
          <h3 className="font-medium text-gray-800">Weekly Check-in</h3>
          <p className="text-sm text-gray-600">Regular progress tracking template</p>
        </div>
      </div>
      <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
        Create New Template
      </button>
    </div>
  );
}

export default TaskTemplates; 