import React from "react";
import StatCard from "./StatCard";
import {
  EmployeesIcon,
  TasksInProgressIcon,
  CompletedTasksIcon,
  ScheduleCheckinIcon,
} from "./Icons";

const StatisticsSection: React.FC = () => {
  return (
    <section className="grid gap-6 mb-6 grid-cols-[repeat(4,1fr)] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
      <StatCard
        title="Active Employees"
        value="24"
        icon={<EmployeesIcon color="#4F46E5" />}
      />
      <StatCard
        title="Tasks in Progress"
        value="47"
        icon={<TasksInProgressIcon />}
      />
      <StatCard
        title="Completed Tasks"
        value="156"
        icon={<CompletedTasksIcon />}
      />
      <StatCard
        title="Scheduled Check-ins"
        value="8"
        icon={<ScheduleCheckinIcon />}
      />
    </section>
  );
};

export default StatisticsSection;
