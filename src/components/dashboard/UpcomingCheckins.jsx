import React from "react";

const UpcomingCheckins = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Upcoming Check-ins</h2>
        <button className="text-indigo-600 text-sm">View All</button>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Employee
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <CheckinRow name="John Doe" date="Today, 2:00 PM" status="Scheduled" />
          <CheckinRow name="Jane Smith" date="Tomorrow, 10:00 AM" status="Pending" />
        </tbody>
      </table>
    </div>
  );
};

const CheckinRow = ({ name, date, status }) => {
  return (
    <tr>
      <td className="px-4 py-2 whitespace-nowrap">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-indigo-200 flex items-center justify-center mr-3">
            <span className="text-xs font-medium text-indigo-600">
              {name.split(" ").map(n => n[0]).join("")}
            </span>
          </div>
          <span className="font-medium">{name}</span>
        </div>
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-sm">{date}</td>
      <td className="px-4 py-2 whitespace-nowrap">
        <span className={`px-2 py-1 text-xs rounded-full ${
          status === "Scheduled" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
        }`}>
          {status}
        </span>
      </td>
    </tr>
  );
};

export default UpcomingCheckins; 