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
import { RoleSelection } from "./RoleSelection";

export function ProfileSetup({ onNavigate, userInfo, onProfileComplete }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [interactionPreference, setInteractionPreference] = useState("visual");
  const [textSize, setTextSize] = useState(50);
  const [voiceSpeed, setVoiceSpeed] = useState(50);
  const [complexity, setComplexity] = useState("simple");
  const [jobCategories, setJobCategories] = useState(["Office Work"]);
  const [userRole, setUserRole] = useState("employee");
  const [activeTab, setActiveTab] = useState("choose");

  const buddyOptions = [
    {
      id: 1,
      name: "Robo Helper",
      image: "https://cdn-icons-png.flaticon.com/512/4712/4712027.png",
      description: "Friendly and helpful assistant bot"
    },
    {
      id: 2,
      name: "Task Master",
      image: "https://cdn-icons-png.flaticon.com/512/4712/4712139.png",
      description: "Efficient and organized task manager"
    },
    {
      id: 3,
      name: "Coach Bot",
      image: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png",
      description: "Supportive and motivational coach"
    },
    {
      id: 4,
      name: "Buddy Bot",
      image: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
      description: "Fun and friendly companion"
    }
  ];

  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
  };

  const handleInteractionPreferenceSelect = (preference) => {
    setInteractionPreference(preference);
  };

  const handleJobCategoryToggle = (category) => {
    if (jobCategories.includes(category)) {
      setJobCategories(jobCategories.filter(c => c !== category));
    } else {
      setJobCategories([...jobCategories, category]);
    }
  };

  const handleBuddySelect = (id) => {
    setSelectedAvatar(id);
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      // Save profile data and navigate based on role
      const profileData = {
        avatar: selectedAvatar,
        interactionPreference,
        textSize,
        voiceSpeed,
        complexity,
        jobCategories,
        userRole
      };
      
      // Call the onProfileComplete handler with the profile data
      onProfileComplete(profileData);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const totalSteps = 5;

  return (
    <div className="flex flex-col min-h-screen">
      <Header userInfo={userInfo} />
      <main className="flex flex-1 justify-center p-8 max-sm:p-4">
        <div className="w-[768px] max-md:w-full max-md:max-w-screen-md">
          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
          <section className="p-6 bg-white rounded-xl shadow-sm max-sm:p-4">
            {currentStep === 1 && (
              <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Choose Your AI Buddy</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {buddyOptions.map((buddy) => (
                    <div 
                      key={buddy.id}
                      onClick={() => handleBuddySelect(buddy.id)}
                      className={`border rounded-lg p-6 flex flex-col items-center cursor-pointer transition-all ${
                        selectedAvatar === buddy.id 
                          ? "border-indigo-500 bg-indigo-50" 
                          : "border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50"
                      }`}
                    >
                      <img 
                        src={buddy.image} 
                        alt={buddy.name} 
                        className="w-32 h-32 mb-4 object-contain"
                      />
                      <h3 className="font-medium text-gray-900 mb-1">{buddy.name}</h3>
                      <p className="text-sm text-gray-500 text-center">{buddy.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {currentStep === 2 && <InteractionPreferences preference={interactionPreference} setPreference={setInteractionPreference} />}
            {currentStep === 3 && 
              <AccessibilitySettings 
                textSize={textSize}
                setTextSize={setTextSize}
                voiceSpeed={voiceSpeed}
                setVoiceSpeed={setVoiceSpeed}
                complexity={complexity}
                setComplexity={setComplexity}
              />
            }
            {currentStep === 4 && <JobCategories categories={jobCategories} setCategories={setJobCategories} />}
            {currentStep === 5 && <RoleSelection userRole={userRole} setUserRole={setUserRole} />}
          </section>
          <NavigationButtons 
            currentStep={currentStep} 
            totalSteps={totalSteps}
            onNext={handleNext} 
            onBack={handleBack} 
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
