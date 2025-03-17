import React from "react";

const TaskTemplates = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Task Templates</h2>
        <button className="px-3 py-1 bg-indigo-600 text-white text-sm rounded">
          Create New
        </button>
      </div>
      <div className="space-y-3">
        <TemplateItem title="Daily Check-in" tags={["Quick", "Daily"]} />
        <TemplateItem title="Weekly Report" tags={["Documentation", "Weekly"]} />
      </div>
    </div>
  );
};

const TemplateItem = ({ title, tags }) => {
  return (
    <div className="border rounded-lg p-3">
      <h3 className="font-medium">{title}</h3>
      <div className="flex mt-2 space-x-2">
        {tags.map((tag) => (
          <span key={tag} className="px-2 py-1 bg-gray-100 text-xs rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TaskTemplates; 