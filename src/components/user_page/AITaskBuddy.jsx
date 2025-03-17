"use client";
import React from "react";
import Header from "./Header";
import WelcomeSection from "./WelcomeSection";
import InputOptions from "./InputOptions";
import QuickTasks from "./QuickTasks";
import TaskList from "./TaskList";
import AchievementCard from "./AchievementCard";
import GrowthGarden from "./GrowthGarden";
import HelpFooter from "./HelpFooter";

function AITaskBuddy({ onNavigate }) {
  return (
    <div className="flex flex-col bg-[linear-gradient(90deg,#EEF2FF_0%,#FFF_100%)] min-h-screen">
      <Header onNavigate={onNavigate} />
      <main className="flex flex-col gap-8 px-20 py-8 max-md:px-10 max-sm:px-5">
        <div className="flex flex-col gap-6">
          <WelcomeSection />
          <InputOptions />
          <div className="flex gap-4 max-sm:flex-wrap">
            <div className="flex-1 flex flex-col">
              <QuickTasks />
              <TaskList />
            </div>
            <div className="flex flex-col gap-6 w-[400px] max-md:w-full">
              <AchievementCard />
              <GrowthGarden />
            </div>
          </div>
        </div>
      </main>
      <HelpFooter />
    </div>
  );
}

export default AITaskBuddy;
