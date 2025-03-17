import React from "react";

const StatisticsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <StatCard title="Total Tasks" value="24" />
      <StatCard title="In Progress" value="8" />
      <StatCard title="Completed" value="16" />
      <StatCard title="Overdue" value="0" />
    </div>
  );
};

const StatCard = ({ title, value }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-2xl font-semibold mt-1">{value}</p>
    </div>
  );
};

export default StatisticsSection; 