import React, { useState } from "react";
import "./styles.css";
import JobCoachDashboard from "./components/dashboard/JobCoachDashboard";
import TaskBuddyApp from "./components/tasks/TaskBuddyApp";
import AITaskBuddy from "./components/user_page/AITaskBuddy";
import LoginPage from "./components/login/AITaskBuddy";
import SignupPage from "./components/signup/AITaskBuddyLandingPage";
import { ProfileSetup } from "./components/profile/ProfileSetup";

function App() {
  const [currentView, setCurrentView] = useState('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [profileComplete, setProfileComplete] = useState(false);

  const handleNavigate = (view) => {
    setCurrentView(view);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    setProfileComplete(true); // Assuming profile is already set up for existing users
    setCurrentView('dashboard');
  };

  const handleSignup = () => {
    setIsAuthenticated(true);
    setProfileComplete(false); // New users need to set up their profile
    setCurrentView('profile-setup');
  };

  const handleProfileComplete = () => {
    setProfileComplete(true);
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

  // If authenticated but profile not complete, show profile setup
  if (!profileComplete) {
    return <ProfileSetup onComplete={handleProfileComplete} />;
  }

  // If authenticated and profile complete, show the app views
  return (
    <div>
      {currentView === 'dashboard' && <JobCoachDashboard onNavigate={handleNavigate} />}
      {currentView === 'tasks' && <TaskBuddyApp onNavigate={handleNavigate} />}
      {currentView === 'user' && <AITaskBuddy onNavigate={handleNavigate} />}
    </div>
  );
}

export default App;
