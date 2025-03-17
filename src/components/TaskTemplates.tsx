"use client";
import React from "react";
import { MoreIcon } from "./Icons";

interface TaskTemplateData {
  title: string;
  description: string;
  tags: string[];
}

const templates: TaskTemplateData[] = [
  {
    title: "Cash Register Operation",
    description: "Basic steps for operating the cash register",
    tags: ["Retail", "Basic"],
  },
  {
    title: "Customer Service Basics",
    description: "Essential customer service guidelines",
    tags: ["Service", "Interactive"],
  },
];

const TaskTemplates: React.FC = () => {
  return (
    <section className="p-6 bg-white rounded-xl border border-solid">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-black">Task Templates</h2>
        <button className="px-4 py-2.5 text-white bg-indigo-600 rounded-lg cursor-pointer border-none">
          Create Template
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {templates.map((template) => (
          <TaskTemplateItem
            key={template.title}
            title={template.title}
            description={template.description}
            tags={template.tags}
          />
        ))}
      </div>
    </section>
  );
};

interface TaskTemplateItemProps {
  title: string;
  description: string;
  tags: string[];
}

const TaskTemplateItem: React.FC<TaskTemplateItemProps> = ({
  title,
  description,
  tags,
}) => {
  return (
    <article className="p-4 rounded-lg border border-solid">
      <div className="flex justify-between mb-2.5">
        <h3 className="text-base font-medium text-black">{title}</h3>
        <button className="p-0 cursor-pointer border-none">
          <MoreIcon />
        </button>
      </div>
      <p className="mb-3.5 text-sm text-gray-500">{description}</p>
      <div className="flex gap-2">
        {tags.map((tag) => (
          <span key={tag} className="px-2 py-1 text-sm rounded">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export default TaskTemplates;
