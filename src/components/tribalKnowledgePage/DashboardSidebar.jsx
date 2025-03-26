"use client";
import React from "react";
import { HomeIcon } from "./Icons";

export const DashboardSidebar = ({ onNavigate }) => {
  const navItems = [
    { icon: <HomeIcon />, label: "Dashboard", active: false, path: 'dashboard' },
    { icon: <svg>...</svg>, label: "Employees", active: false, path: 'employees' },
    { icon: <svg>...</svg>, label: "Tasks", active: false, path: 'tasks' },
    { icon: <svg>...</svg>, label: "Reports", active: false, path: 'reports' },
    { icon: <svg>...</svg>, label: "Schedule", active: false, path: 'schedule' },
    { icon: <svg>...</svg>, label: "Tribal Knowledge", active: true, path: 'tribalKnowledge' },
  ];

  return (
    <aside className="w-64 bg-white border max-md:hidden">
      <nav className="flex flex-col gap-2 p-4" aria-label="Main navigation">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`flex gap-3 items-center px-4 py-2 rounded-lg ${
              item.active ? "bg-indigo-50" : ""
            }`}
            onClick={() => onNavigate(item.path)}
          >
            {item.icon}
            <span
              className={`text-base ${
                item.active ? "text-indigo-600" : "text-gray-600"
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </aside>
  );
};
