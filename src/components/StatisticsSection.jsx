import React from "react";

function StatisticsSection() {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Active Tasks</h3>
          <p className="text-3xl font-bold text-indigo-600">12</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Completed Tasks</h3>
          <p className="text-3xl font-bold text-green-600">24</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Upcoming Check-ins</h3>
          <p className="text-3xl font-bold text-orange-600">5</p>
        </div>
      </div>
    </section>
  );
}

export default StatisticsSection; 