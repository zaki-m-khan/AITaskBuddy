"use client";
import React from "react";

export const SearchAndFilter = () => {
  return (
    <section className="flex gap-3.5 items-center p-5 bg-white rounded-lg shadow-sm">
      <div className="flex-1">
        <div className="flex gap-3 items-center px-4 py-2 rounded-lg border">
          <svg>...</svg>
          <input
            type="text"
            placeholder="Search discussions..."
            className="flex-1 text-sm text-gray-400 border-[nonepx]"
          />
        </div>
      </div>
      <div className="flex gap-3.5 items-center">
        <select className="px-4 py-2 text-sm rounded-lg border">
          <option>All Categories</option>
        </select>
        <select className="px-4 py-2 text-sm rounded-lg border">
          <option>Sort By: Recent</option>
        </select>
      </div>
    </section>
  );
};
