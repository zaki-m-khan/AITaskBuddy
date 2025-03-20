import React from "react";
import Header from "./Header";
import Sidebar from "../Sidebar";
import StatisticsSection from "../StatisticsSection";
import EmployeeProgress from "./EmployeeProgress";
import TaskTemplates from "../TaskTemplates";
import UpcomingCheckins from "../UpcomingCheckins";

function JobCoachDashboard({ onNavigate, onLogout, userInfo, userRole }) {
  // Add a permission check at the component level
  if (userRole === 'employee') {
    // Redirect employees away from the dashboard
    setTimeout(() => onNavigate('tasks'), 0);
    return <div>Redirecting to tasks...</div>;
  }
  
  return (
    <div className="min-h-screen bg-gray-100">
      <Header onLogout={onLogout} userInfo={userInfo} />
      <div className="flex">
        <Sidebar onNavigate={onNavigate} />
        <main className="flex-1 p-6">
          <StatisticsSection />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <EmployeeProgress />
            <TaskTemplates />
          </div>
          <UpcomingCheckins />
        </main>
      </div>
    </div>
  );
}

export default JobCoachDashboard; 