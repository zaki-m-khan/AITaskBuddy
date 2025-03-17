"use client";
import React from "react";
import TaskCard from "./TaskCard";

const RecentTasks = () => {
  const tasks = [
    {
      status: "Completed",
      timeAgo: "2 hours ago",
      title: "Team meeting preparation",
      description:
        "Created agenda and gathered relevant documents for weekly team sync",
      duration: "30 minutes",
    },
    {
      status: "Completed",
      timeAgo: "Yesterday",
      title: "File organization",
      description: "Sorted and labeled documents in the shared drive",
      duration: "45 minutes",
    },
  ];

  return (
    <section className="mt-12">
      <h2 className="mb-7 text-xl font-bold text-gray-800">
        Recently Completed Tasks
      </h2>
      <div className="flex gap-6 max-md:flex-col">
        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            status={task.status}
            timeAgo={task.timeAgo}
            title={task.title}
            description={task.description}
            duration={task.duration}
          />
        ))}
      </div>
    </section>
  );
};

export default RecentTasks;
