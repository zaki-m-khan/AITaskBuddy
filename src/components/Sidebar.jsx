import React from "react";

const Sidebar = () => {
  return (
    <aside className="bg-white w-64 min-h-screen p-4 border-r">
      <nav className="space-y-2">
        <SidebarItem label="Dashboard" active />
        <SidebarItem label="Tasks" />
        <SidebarItem label="Calendar" />
        <SidebarItem label="Reports" />
        <SidebarItem label="Settings" />
      </nav>
    </aside>
  );
};

const SidebarItem = ({ label, active = false }) => {
  return (
    <a
      href="#"
      className={`flex items-center p-2 rounded-lg ${
        active ? "bg-indigo-50 text-indigo-600" : "text-gray-600 hover:bg-gray-50"
      }`}
    >
      <span>{label}</span>
    </a>
  );
};

export default Sidebar; 