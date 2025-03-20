import React from "react";

const UpcomingCheckins = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Upcoming Check-ins</h2>
      <div className="space-y-4">
        <div className="p-3 border border-gray-200 rounded-md hover:bg-gray-50">
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-gray-800">Weekly Progress Review</h3>
            <span className="text-sm text-gray-500">Tomorrow, 10:00 AM</span>
          </div>
          <p className="text-sm text-gray-600">Review job search progress and set new goals</p>
        </div>
        <div className="p-3 border border-gray-200 rounded-md hover:bg-gray-50">
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-gray-800">Resume Feedback Session</h3>
            <span className="text-sm text-gray-500">Wed, 2:30 PM</span>
          </div>
          <p className="text-sm text-gray-600">Discuss resume improvements and updates</p>
        </div>
        <div className="p-3 border border-gray-200 rounded-md hover:bg-gray-50">
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-gray-800">Mock Interview Practice</h3>
            <span className="text-sm text-gray-500">Fri, 11:00 AM</span>
          </div>
          <p className="text-sm text-gray-600">Practice interview skills and receive feedback</p>
        </div>
      </div>
      <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
        Schedule Check-in
      </button>
    </div>
  );
};

export default UpcomingCheckins; 