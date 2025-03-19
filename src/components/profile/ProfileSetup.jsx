"use client";

import React, { useState } from "react";
import { Header } from "./Header";
import { ProgressBar } from "./ProgressBar";
import { AvatarSelection } from "./AvatarSelection";
import { InteractionPreferences } from "./InteractionPreferences";
import { AccessibilitySettings } from "./AccessibilitySettings";
import { JobCategories } from "./JobCategories";
import { NavigationButtons } from "./NavigationButtons";
import { Footer } from "./Footer";

export const ProfileSetup = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedBuddy, setSelectedBuddy] = useState(1);
  const [interactionPreference, setInteractionPreference] = useState("audio");
  const [settings, setSettings] = useState({
    textSize: 50,
    voiceSpeed: 50,
    uiComplexity: "simple"
  });
  const [selectedCategories, setSelectedCategories] = useState(["Office Work"]);

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      // Profile setup is complete
      onComplete();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 justify-center p-8 max-sm:p-4">
        <div className="w-[768px] max-md:w-full max-md:max-w-screen-md">
          <ProgressBar currentStep={currentStep} />
          <section className="p-6 bg-white rounded-xl shadow-sm max-sm:p-4">
            {currentStep === 1 && <AvatarSelection selectedBuddy={selectedBuddy} setSelectedBuddy={setSelectedBuddy} />}
            {currentStep === 2 && <InteractionPreferences preference={interactionPreference} setPreference={setInteractionPreference} />}
            {currentStep === 3 && <AccessibilitySettings settings={settings} setSettings={setSettings} />}
            {currentStep === 4 && <JobCategories categories={selectedCategories} setCategories={setSelectedCategories} />}
          </section>
          <NavigationButtons 
            currentStep={currentStep} 
            onNext={handleNext} 
            onBack={handleBack} 
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};
