"use client";
import React from "react";

const QuickTemplateButton = ({ label }) => {
  return (
    <button className="px-4 py-2.5 text-base text-gray-600 bg-gray-50 rounded-full cursor-pointer border-[none] max-sm:w-[calc(50%_-_6px)]">
      {label}
    </button>
  );
};

export default QuickTemplateButton;
