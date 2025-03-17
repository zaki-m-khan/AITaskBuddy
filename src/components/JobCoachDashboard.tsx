"use client";
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import StatisticsSection from "./StatisticsSection";
import EmployeeProgress from "./EmployeeProgress";
import TaskTemplates from "./TaskTemplates";
import UpcomingCheckins from "./UpcomingCheckins";

const JobCoachDashboard: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex mx-auto my-0 max-w-[1440px] max-md:flex-col">
        <Sidebar />
        <section className="flex-1 p-6">
          <StatisticsSection />
          <div className="grid gap-6 mb-6 grid-cols-[1fr_1fr] max-md:grid-cols-[1fr]">
            <EmployeeProgress />
            <TaskTemplates />
          </div>
          <UpcomingCheckins />
        </section>
      </div>
    </main>
  );
};

export default JobCoachDashboard;
