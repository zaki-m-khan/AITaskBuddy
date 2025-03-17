import React from "react";

const Sidebar = ({ onNavigate }) => {
  return (
    <aside className="bg-white w-64 min-h-screen p-4 border-r">
      <nav className="space-y-2">
        <SidebarItem label="Dashboard" active={true} onClick={() => onNavigate('dashboard')} />
        <SidebarItem label="Tasks" active={false} onClick={() => onNavigate('tasks')} />
        <SidebarItem label="Calendar" active={false} onClick={() => onNavigate('calendar')} />
        <SidebarItem label="Reports" active={false} onClick={() => onNavigate('reports')} />
        <SidebarItem label="Settings" active={false} onClick={() => onNavigate('settings')} />
      </nav>
    </aside>
  );
};

const SidebarItem = ({ label, active = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center p-2 rounded-lg w-full text-left ${
        active ? "bg-indigo-50 text-indigo-600" : "text-gray-600 hover:bg-gray-50"
      }`}
    >
      <span>{label}</span>
    </button>
  );
};

export default Sidebar; 