"use client";
import React, { useState } from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";
import FeatureSection from "./FeatureSection";
import Footer from "./Footer";
import EmployeeLoginForm from "./EmployeeLoginForm";

function AITaskBuddy({ onEmailLogin, onGoogleLogin, onNavigate }) {
  const [loginMode, setLoginMode] = useState("manager"); // "manager" or "employee"
  
  return (
    <div className="flex flex-col bg-[linear-gradient(90deg,#EEF2FF_0%,#FFF_100%)] min-h-screen">
      <Header />
      <main className="flex flex-1 justify-center items-center p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-12 w-full max-w-7xl">
          <div className="flex-1 max-w-xl">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-3">
                {loginMode === "manager" ? "Job Coach Login" : "Employee Login"}
              </h2>
              <p className="text-xl text-gray-600">
                {loginMode === "manager" 
                  ? "Sign in to manage your team and track progress" 
                  : "Sign in to view and complete your assigned tasks"}
              </p>
            </div>
            
            <div className="mb-8">
              <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  className={`flex-1 py-4 text-lg font-medium ${loginMode === "manager" ? "bg-indigo-600 text-white" : "bg-white text-gray-700"}`}
                  onClick={() => setLoginMode("manager")}
                >
                  Job Coach
                </button>
                <button 
                  className={`flex-1 py-4 text-lg font-medium ${loginMode === "employee" ? "bg-indigo-600 text-white" : "bg-white text-gray-700"}`}
                  onClick={() => setLoginMode("employee")}
                >
                  Employee
                </button>
              </div>
            </div>
            
            {loginMode === "manager" ? (
              <LoginForm 
                onEmailLogin={(email, password) => onEmailLogin(email, password, "manager")} 
                onGoogleLogin={() => onGoogleLogin("manager")} 
                onNavigateToSignup={() => onNavigate('signup')}
              />
            ) : (
              <EmployeeLoginForm 
                onEmailLogin={(email, password) => onEmailLogin(email, password, "employee")} 
                onGoogleLogin={() => onGoogleLogin("employee")} 
              />
            )}
          </div>
          
          <div className="flex-1">
            <FeatureSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AITaskBuddy;
