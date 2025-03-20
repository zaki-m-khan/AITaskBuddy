"use client";
import React from "react";
import Header from "./Header";
import SignUpForm from "./SignUpForm";
import FeatureCard from "./FeatureCard";
import Footer from "./Footer";

function AITaskBuddyLandingPage({ onEmailSignup, onGoogleSignup, onNavigate }) {
  return (
    <div className="min-h-screen">
      <Header onNavigate={onNavigate} />
      <main className="flex flex-col gap-16 px-20 py-12 mx-auto my-0 max-w-[1440px] max-md:px-10 max-md:py-12 max-sm:px-5">
        <section className="flex gap-12 justify-between items-center max-md:flex-col">
          <div className="flex flex-col gap-6 max-w-[584px]">
            <h1 className="text-5xl font-bold text-indigo-900 max-md:text-4xl max-sm:text-3xl">
              Join AI Task Buddy Today
            </h1>
            <p className="text-xl text-gray-600 max-md:text-lg">
              Create an account to start using AI-powered tools for job coaching and task management.
            </p>
          </div>
          <SignUpForm 
            onEmailSignup={onEmailSignup} 
            onGoogleSignup={onGoogleSignup} 
            onNavigateToLogin={() => onNavigate('login')} 
          />
        </section>
        <section className="flex flex-col gap-12">
          <h2 className="text-3xl font-bold text-center text-indigo-900">
            Why Choose AI Task Buddy?
          </h2>
          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
            <FeatureCard
              title="Personalized Support"
              description="Get AI-powered assistance tailored to your specific job needs and challenges."
            />
            <FeatureCard
              title="Progress Tracking"
              description="Monitor employee progress with detailed analytics and insights."
            />
            <FeatureCard
              title="Accessible Interface"
              description="User-friendly design that works for everyone, regardless of ability."
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

// Icon components
function AudioModeIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="24" fill="#EEF2FF" />
      <path d="M24 16C22.9 16 22 16.9 22 18V24C22 25.1 22.9 26 24 26C25.1 26 26 25.1 26 24V18C26 16.9 25.1 16 24 16ZM28.3 24C28.3 27 25.76 29 24 29C22.24 29 19.7 27 19.7 24H18C18 27.53 20.4 30.44 23.5 30.9V33H24.5V30.9C27.6 30.44 30 27.53 30 24H28.3Z" fill="#4F46E5" />
    </svg>
  );
}

function VisualModeIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="24" fill="#EEF2FF" />
      <path d="M24 18C20.13 18 17 21.13 17 25C17 28.87 20.13 32 24 32C27.87 32 31 28.87 31 25C31 21.13 27.87 18 24 18ZM24 30C21.24 30 19 27.76 19 25C19 22.24 21.24 20 24 20C26.76 20 29 22.24 29 25C29 27.76 26.76 30 24 30ZM24 22C22.35 22 21 23.35 21 25C21 26.65 22.35 28 24 28C25.65 28 27 26.65 27 25C27 23.35 25.65 22 24 22Z" fill="#4F46E5" />
    </svg>
  );
}

function TextModeIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="24" fill="#EEF2FF" />
      <path d="M29 17H19C17.9 17 17 17.9 17 19V29C17 30.1 17.9 31 19 31H29C30.1 31 31 30.1 31 29V19C31 17.9 30.1 17 29 17ZM29 29H19V19H29V29ZM21 23H27V25H21V23ZM21 26H27V28H21V26ZM21 20H27V22H21V20Z" fill="#4F46E5" />
    </svg>
  );
}

export default AITaskBuddyLandingPage;
