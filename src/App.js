import React, { useState, useEffect } from "react";
import "./styles.css";
import JobCoachDashboard from "./components/dashboard/JobCoachDashboard";
import TaskBuddyApp from "./components/tasks/TaskBuddyApp";
import AITaskBuddy from "./components/user_page/AITaskBuddy";
import LoginPage from "./components/login/AITaskBuddy";
import SignupPage from "./components/signup/AITaskBuddyLandingPage";
import { ProfileSetup } from "./components/profile/ProfileSetup";
import { auth } from "./firebaseConfig";
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut
} from "firebase/auth";
import { ChatTest } from "./components/chat/ChatTest";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentView, setCurrentView] = useState('login');
  const [profileComplete, setProfileComplete] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Sign out any existing user to ensure the app starts on the login page
    signOut(auth).catch((error) => console.error("Error signing out on load", error));

    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setCurrentUser(user);
        setUserInfo({
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        });
        setCurrentView('dashboard');
      } else {
        setCurrentUser(null);
        setCurrentView('login');
      }
    });

    return () => unsubscribe();
  }, []);

  const handleEmailLogin = async (email, password, role) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful:", userCredential.user);
      
      // Set the user role
      setUserRole(role);
      
      // Navigate based on role
      if (role === "manager") {
        setCurrentView('dashboard');
      } else {
        setCurrentView('tasks');
      }
    } catch (error) {
      console.error("Error logging in with email and password", error);
      throw error;
    }
  };

  const handleGoogleLogin = async (role) => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUserRole(role);
      
      if (role === "manager") {
        setCurrentView('dashboard');
      } else {
        setCurrentView('tasks');
      }
    } catch (error) {
      console.error("Error logging in with Google", error);
    }
  };

  const handleEmailSignup = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Signup successful:", userCredential.user);
      // Redirect to profile setup after successful signup
      setCurrentView('profile');
    } catch (error) {
      console.error("Error signing up with email and password", error);
      throw error;
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setCurrentView('login');
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  const handleProfileComplete = (profileData) => {
    setUserRole(profileData.userRole);
    
    // Navigate based on role
    if (profileData.userRole === "manager") {
      setCurrentView('dashboard');
    } else {
      setCurrentView('tasks');
    }
  };

  // Add this function to check permissions
  const canAccessView = (view, role) => {
    if (view === 'dashboard' && role === 'employee') {
      return false;
    }
    return true;
  };

  // Update the navigation handler
  const handleNavigation = (view) => {
    if (canAccessView(view, userRole)) {
      setCurrentView(view);
    } else {
      // Optionally show an error message
      console.log("You don't have permission to access this page");
      // Or redirect to an allowed page
      setCurrentView('tasks');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {currentView === 'login' && (
        <LoginPage 
          onEmailLogin={handleEmailLogin} 
          onGoogleLogin={handleGoogleLogin} 
          onNavigate={setCurrentView} 
        />
      )}
      {currentView === 'signup' && (
        <SignupPage 
          onEmailSignup={handleEmailSignup} 
          onGoogleSignup={handleGoogleLogin} 
          onNavigate={setCurrentView} 
        />
      )}
      {currentView === 'dashboard' && (
        <JobCoachDashboard 
          onNavigate={setCurrentView} 
          onLogout={handleLogout}
          userInfo={userInfo}
        />
      )}
      {currentView === 'tasks' && (
        <TaskBuddyApp 
          onNavigate={handleNavigation} 
          onLogout={handleLogout}
          userInfo={userInfo}
          userRole={userRole}
        />
      )}
      {currentView === 'user' && (
        <AITaskBuddy 
          onNavigate={setCurrentView} 
          onLogout={handleLogout}
          userInfo={userInfo}
        />
      )}
      {currentView === 'profile' && (
        <ProfileSetup 
          onNavigate={setCurrentView} 
          userInfo={userInfo}
          onProfileComplete={handleProfileComplete}
        />
      )}
      {currentView === 'chat' && (
        <ChatTest />
      )}
    </div>
  );
}

export default App;
