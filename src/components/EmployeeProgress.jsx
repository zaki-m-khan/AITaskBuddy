import React from "react";

const EmployeeProgress = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h2 className="text-lg font-medium mb-4">Employee Progress</h2>
      <div className="space-y-4">
        <ProgressItem name="John Doe" progress={75} />
        <ProgressItem name="Jane Smith" progress={45} />
        <ProgressItem name="Bob Johnson" progress={90} />
      </div>
    </div>
  );
};

const ProgressItem = ({ name, progress }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-gray-500">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-indigo-600 h-2 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default EmployeeProgress; 