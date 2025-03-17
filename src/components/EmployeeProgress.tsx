"use client";
import React from "react";

interface EmployeeData {
  name: string;
  progress: number;
  avatarUrl: string;
}

const employees: EmployeeData[] = [
  {
    name: "Sarah Johnson",
    progress: 75,
    avatarUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4051b9e3498a85c9e0454d4e21be6fcde2b9314a",
  },
  {
    name: "Michael Chen",
    progress: 60,
    avatarUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a45223b3c7690bcfdb08186f66102601b7ed2b81",
  },
  {
    name: "Emma Wilson",
    progress: 85,
    avatarUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a427545d57df43594dab2818943e96bcea07e7ce",
  },
];

const EmployeeProgress: React.FC = () => {
  return (
    <section className="p-6 bg-white rounded-xl border border-solid">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-black">Employee Progress</h2>
        <button className="text-indigo-600 cursor-pointer">View All</button>
      </div>
      <div className="flex flex-col gap-4">
        {employees.map((employee) => (
          <EmployeeProgressItem
            key={employee.name}
            name={employee.name}
            progress={employee.progress}
            avatarUrl={employee.avatarUrl}
          />
        ))}
      </div>
    </section>
  );
};

interface EmployeeProgressItemProps {
  name: string;
  progress: number;
  avatarUrl: string;
}

const EmployeeProgressItem: React.FC<EmployeeProgressItemProps> = ({
  name,
  progress,
  avatarUrl,
}) => {
  return (
    <div className="flex gap-4 items-center">
      <img src={avatarUrl} alt={name} className="w-10 h-10 rounded-full" />
      <div className="flex-1">
        <div className="flex justify-between mb-2">
          <span className="text-black">{name}</span>
          <span className="text-sm text-gray-500">{progress}%</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full">
          <div
            className="h-full bg-indigo-600 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeeProgress;
