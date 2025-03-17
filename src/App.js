import React, { useState } from "react";
import "./styles.css";
import JobCoachDashboard from "./components/dashboard/JobCoachDashboard";
import TaskBuddyApp from "./components/tasks/TaskBuddyApp";
import AITaskBuddy from "./components/user_page/AITaskBuddy";

function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  const handleNavigate = (view) => {
    setCurrentView(view);
  };

  return (
    <div>
      {currentView === 'dashboard' && <JobCoachDashboard onNavigate={handleNavigate} />}
      {currentView === 'tasks' && <TaskBuddyApp onNavigate={handleNavigate} />}
      {currentView === 'user' && <AITaskBuddy onNavigate={handleNavigate} />}
    </div>
  );
}

export default App;
