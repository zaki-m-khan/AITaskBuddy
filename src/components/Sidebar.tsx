import React from "react";
import {
  HomeIcon,
  EmployeesIcon,
  TasksIcon,
  ReportsIcon,
  ScheduleIcon,
} from "./Icons";

const Sidebar: React.FC = () => {
  return (
    <aside className="p-4 w-64 bg-white border-r border-solid max-md:w-full max-md:border-b max-md:border-solid max-md:border-r-[none]">
      <nav className="flex flex-col gap-2 max-sm:overflow-x-auto max-sm:flex-row">
        <NavItem icon={<HomeIcon />} label="Dashboard" active />
        <NavItem icon={<EmployeesIcon />} label="Employees" />
        <NavItem icon={<TasksIcon />} label="Tasks" />
        <NavItem icon={<ReportsIcon />} label="Reports" />
        <NavItem icon={<ScheduleIcon />} label="Schedule" />
      </nav>
    </aside>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active = false }) => {
  return (
    <button
      className={`flex gap-3 items-center px-4 py-2.5 rounded-lg cursor-pointer text-left ${
        active ? "text-indigo-600" : "text-gray-600"
      }`}
    >
      <div>{icon}</div>
      <span>{label}</span>
    </button>
  );
};

export default Sidebar;
