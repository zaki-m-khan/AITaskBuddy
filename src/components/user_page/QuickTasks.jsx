import React from "react";

function QuickTasks() {
  return (
    <div className="flex-1">
      <h2 className="mb-4 text-lg font-semibold text-gray-800">Quick Tasks</h2>
      <div className="grid grid-cols-2 gap-4">
        <QuickTaskButton icon="📧" label="Sort incoming mail" />
        <QuickTaskButton icon="📦" label="Pack orders" />
        <QuickTaskButton icon="🧹" label="Clean work area" />
        <QuickTaskButton icon="➕" label="Add new task" />
      </div>
    </div>
  );
}

function QuickTaskButton({ icon, label }) {
  return (
    <button className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
      <span className="text-xl">{icon}</span>
      <span className="text-gray-700">{label}</span>
    </button>
  );
}

export default QuickTasks; 