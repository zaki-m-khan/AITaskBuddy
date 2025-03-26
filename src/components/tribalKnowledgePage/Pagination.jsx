"use client";
import React from "react";

export const Pagination = () => {
  return (
    <nav className="flex gap-1.5 justify-center mt-6" aria-label="Pagination">
      <button className="px-4 py-2.5 text-sm rounded-lg border">
        Previous
      </button>
      <button className="px-4 py-2.5 text-sm text-white bg-indigo-600 rounded-lg">
        1
      </button>
      <button className="px-4 py-2.5 text-sm rounded-lg border">2</button>
      <button className="px-4 py-2.5 text-sm rounded-lg border">3</button>
      <button className="px-4 py-2.5 text-sm rounded-lg border">Next</button>
    </nav>
  );
};
