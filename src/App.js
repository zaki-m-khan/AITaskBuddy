import React, { useState } from "react";
import "./styles.css";
import JobCoachDashboard from "./components/dashboard/JobCoachDashboard";
import TaskBuddyApp from "./components/tasks/TaskBuddyApp";
import AITaskBuddy from "./components/user_page/AITaskBuddy";
import LoginPage from "./components/login/AITaskBuddy";
import SignupPage from "./components/signup/AITaskBuddyLandingPage";

function App() {
  const [currentView, setCurrentView] = useState('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleNavigate = (view) => {
    setCurrentView(view);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentView('dashboard');
  };

  const handleSignup = () => {
    setIsAuthenticated(true);
    setCurrentView('dashboard');
  };

  // If not authenticated, show login or signup
  if (!isAuthenticated) {
    return (
      <div>
        {currentView === 'login' && <LoginPage onNavigate={handleNavigate} onLogin={handleLogin} />}
        {currentView === 'signup' && <SignupPage onNavigate={handleNavigate} onSignup={handleSignup} />}
      </div>
    );
  }

  // If authenticated, show the app views
  return (
    <div>
      {currentView === 'dashboard' && <JobCoachDashboard onNavigate={handleNavigate} />}
      {currentView === 'tasks' && <TaskBuddyApp onNavigate={handleNavigate} />}
      {currentView === 'user' && <AITaskBuddy onNavigate={handleNavigate} />}
    </div>
  );
}

export default App;
