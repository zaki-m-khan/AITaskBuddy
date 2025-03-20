"use client";
import React from "react";

export function ProgressBar({ currentStep, totalSteps = 5 }) {
  const steps = [
    "Choose AI Buddy",
    "Interaction Preferences",
    "Accessibility Settings",
    "Job Categories",
    "Role Selection"
  ];

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        {steps.slice(0, totalSteps).map((step, index) => (
          <div 
            key={index}
            className={`text-sm font-medium ${
              index + 1 === currentStep ? "text-indigo-600" : "text-gray-500"
            } ${index === 0 ? "text-left" : index === totalSteps - 1 ? "text-right" : "text-center"}`}
            style={{ width: `${100 / totalSteps}%` }}
          >
            {step}
          </div>
        ))}
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-indigo-600 rounded-full"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
