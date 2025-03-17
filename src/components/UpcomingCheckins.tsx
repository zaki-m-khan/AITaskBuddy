"use client";
import React from "react";
import { VideoIcon, MoreIcon } from "./Icons";

interface CheckinData {
  employee: {
    name: string;
    avatarUrl: string;
  };
  dateTime: string;
  type: string;
  status: string;
}

const checkins: CheckinData[] = [
  {
    employee: {
      name: "Sarah Johnson",
      avatarUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d4c51ee463678d9c1c6b8fb67bfaaa025fa8da8b",
    },
    dateTime: "Mar 15, 2025 10:00 AM",
    type: "Weekly Review",
    status: "Confirmed",
  },
  {
    employee: {
      name: "Michael Chen",
      avatarUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/191ecb5f047fddc94b1cd38090596b53c586bb8f",
    },
    dateTime: "Mar 16, 2025 2:30 PM",
    type: "Training",
    status: "Pending",
  },
];

const UpcomingCheckins: React.FC = () => {
  return (
    <section className="p-6 bg-white rounded-xl border border-solid">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-black">Upcoming Check-ins</h2>
        <button className="text-indigo-600 cursor-pointer">Schedule New</button>
      </div>
      <div className="max-sm:block max-sm:overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-3 font-bold text-left text-black border-b border-solid">
                Employee
              </th>
              <th className="px-4 py-3 font-bold text-left text-black border-b border-solid">
                Date &amp; Time
              </th>
              <th className="px-4 py-3 font-bold text-left text-black border-b border-solid">
                Type
              </th>
              <th className="px-4 py-3 font-bold text-left text-black border-b border-solid">
                Status
              </th>
              <th className="px-4 py-3 font-bold text-left text-black border-b border-solid">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {checkins.map((checkin) => (
              <tr key={`${checkin.employee.name}-${checkin.dateTime}`}>
                <td className="flex gap-3 items-center px-4 py-3 border-b border-solid">
                  <img
                    src={checkin.employee.avatarUrl}
                    alt={checkin.employee.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <span>{checkin.employee.name}</span>
                </td>
                <td className="px-4 py-3 border-b border-solid">
                  {checkin.dateTime}
                </td>
                <td className="px-4 py-3 text-sm rounded border-b border-solid">
                  {checkin.type}
                </td>
                <td className="px-4 py-3 text-sm rounded border-b border-solid">
                  {checkin.status}
                </td>
                <td className="flex gap-3 justify-end px-4 py-3 border-b border-solid">
                  <button className="p-0 cursor-pointer border-none">
                    <VideoIcon />
                  </button>
                  <button className="p-0 cursor-pointer border-none">
                    <MoreIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default UpcomingCheckins;
