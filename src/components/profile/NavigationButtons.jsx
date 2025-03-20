"use client";
import React from "react";

export function NavigationButtons({ currentStep, totalSteps = 5, onNext, onBack }) {
  return (
    <div className="flex justify-between mt-8">
      <button 
        onClick={onBack}
        className={`px-6 py-2 rounded-md ${
          currentStep === 1 ? 'bg-gray-200 text-gray-600 cursor-not-allowed' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        }`}
        disabled={currentStep === 1}
      >
        Back
      </button>
      <button 
        onClick={onNext}
        className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        {currentStep === totalSteps ? 'Finish' : 'Next'}
      </button>
    </div>
  );
}
