"use client";
import React from "react";

const InputOption = ({ icon, label }) => {
  return (
    <button className="flex gap-3 justify-center items-center px-0 py-5 text-base text-indigo-900 bg-indigo-50 rounded-lg border-2 border-indigo-100 border-solid cursor-pointer w-[373px] max-md:w-full">
      <div className="w-6 h-6">{icon}</div>
      <span>{label}</span>
    </button>
  );
};

export default InputOption;
