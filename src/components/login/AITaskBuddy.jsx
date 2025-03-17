"use client";
import React from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";
import FeatureSection from "./FeatureSection";
import Footer from "./Footer";
import ModeSelector from "./ModeSelector";

function AITaskBuddy({ onNavigate, onLogin }) {
  return (
    <div className="flex flex-col bg-[linear-gradient(90deg,#EEF2FF_0%,#FFF_100%)] min-h-screen">
      <Header onNavigate={onNavigate} />
      <main className="flex flex-col gap-24 items-center px-8 py-12 max-md:px-6 max-sm:px-4">
        <section className="flex gap-12 justify-between items-center w-full max-w-[1216px] max-md:flex-col">
          <div className="flex flex-col gap-6 w-full max-w-[584px]">
            <h1 className="text-5xl font-bold leading-10 text-indigo-900 max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:leading-9">
              Your Friendly AI Assistant for Job Success
            </h1>
            <p className="text-xl leading-5 text-gray-700 max-md:text-lg max-sm:text-base">
              Breaking down work tasks into simple, manageable steps with
              personalized support for every ability.
            </p>
            <ModeSelector />
          </div>
          <LoginForm onLogin={onLogin} onNavigateToSignup={() => onNavigate('signup')} />
        </section>
        <FeatureSection />
      </main>
      <Footer />
    </div>
  );
}

export default AITaskBuddy;
