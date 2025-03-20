import React from "react";

const EmployeeProgress = ({ name, progress, status }) => {
  const getStatusClasses = () => {
    switch (status) {
      case "On Track":
        return "bg-green-100 text-green-800";
      case "Needs Attention":
        return "bg-amber-100 text-amber-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getProgressBarColor = () => {
    if (progress < 50) return "bg-amber-500";
    if (progress < 75) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Employee Progress</h2>
      <div className="space-y-4">
        <div className="p-3 border border-gray-200 rounded-md hover:bg-gray-50">
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-gray-800">{name}</h3>
            <span className={`text-xs px-2 py-1 rounded-full ${getStatusClasses()}`}>
              {status}
            </span>
          </div>
          <div className="mt-2">
            <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
              <div 
                className={`h-full ${getProgressBarColor()}`} 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">{progress}% of tasks completed</p>
          </div>
        </div>
        <div className="p-3 border border-gray-200 rounded-md hover:bg-gray-50">
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-gray-800">Jane Smith</h3>
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Needs Attention</span>
          </div>
          <div className="mt-2">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: "45%" }}></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">45% of tasks completed</p>
          </div>
        </div>
        <div className="p-3 border border-gray-200 rounded-md hover:bg-gray-50">
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-gray-800">Robert Johnson</h3>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">On Track</span>
          </div>
          <div className="mt-2">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "90%" }}></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">90% of tasks completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProgress; 