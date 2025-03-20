import React from "react";

const StatCard = ({ title, value, color }) => {
  const getColorClasses = () => {
    switch (color) {
      case "indigo":
        return "text-indigo-600";
      case "green":
        return "text-green-600";
      case "orange":
        return "text-orange-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-gray-700 font-medium mb-2">{title}</h3>
      <p className={`text-3xl font-bold ${getColorClasses()}`}>{value}</p>
    </div>
  );
};

export default StatCard; 