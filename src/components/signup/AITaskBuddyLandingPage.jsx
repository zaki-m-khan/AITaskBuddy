"use client";
import React from "react";
import Header from "./Header";
import SignUpForm from "./SignUpForm";
import FeatureCard from "./FeatureCard";
import Footer from "./Footer";

function AITaskBuddyLandingPage({ onNavigate, onSignup }) {
  return (
    <div className="min-h-screen">
      <Header onNavigate={onNavigate} />
      <main className="px-20 py-0 mx-auto my-0 max-w-[1440px] max-md:px-10 max-md:py-0">
        <section className="flex gap-12 px-0 py-12 max-md:flex-col">
          <div className="flex-1">
            <h1 className="mb-6 text-5xl font-bold leading-tight text-indigo-900 max-sm:text-3xl">
              Start Your Journey with AI Task Buddy
            </h1>
            <p className="mb-12 text-xl text-gray-700 max-sm:text-base">
              Create your account and discover a smarter way to manage tasks
              with personalized AI assistance.
            </p>
            <div className="flex gap-4 p-6 bg-white rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.1),0_10px_15px_rgba(0,0,0,0.1)] max-md:flex-wrap max-md:justify-center">
              <FeatureCard icon={<AudioModeIcon />} title="Audio Mode" />
              <FeatureCard icon={<VisualModeIcon />} title="Visual Mode" />
              <FeatureCard icon={<TextModeIcon />} title="Text Mode" />
            </div>
          </div>
          <div className="flex-1">
            <SignUpForm onSignup={onSignup} onNavigateToLogin={() => onNavigate('login')} />
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
