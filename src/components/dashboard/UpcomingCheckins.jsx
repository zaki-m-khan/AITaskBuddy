import React from "react";

const UpcomingCheckins = ({ title, description, time }) => {
  return (
    <div className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-gray-800 mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <span className="text-xs text-gray-500">{time}</span>
      </div>
    </div>
  );
};

export default UpcomingCheckins; 