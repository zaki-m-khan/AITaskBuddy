"use client";
import React from "react";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardSidebar } from "./DashboardSidebar";
import { SearchAndFilter } from "./SearchAndFilter";
import { DiscussionPost } from "./DiscussionPost";
import { Pagination } from "./Pagination";

export const JobCoachDashboard = ({ onNavigate, onLogout, userInfo, userRole }) => {
  const discussionPosts = [
    {
      avatarUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3c5c6e91676b484bec8ff7ed2c62a1048a41e717",
      title: "Effective Communication Strategies with Employers",
      category: "Job Placement",
      content:
        "Sharing my experience on how to effectively communicate with potential employers and address their concerns about supported employment...",
      comments: 24,
      views: 156,
      timeAgo: "2 hours ago",
      categoryColor: "blue",
    },
    {
      avatarUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1dc9790ec7a4f5b2de4d5c886615884f2ba79f8c",
      title: "Training Resources for New Job Coaches",
      category: "Training",
      content:
        "I've compiled a list of essential resources and training materials that have helped me in my journey as a job coach...",
      comments: 18,
      views: 203,
      timeAgo: "1 day ago",
      categoryColor: "emerald",
    },
    {
      avatarUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4e5ef1325b0c07a9fdd7250cc8dcd595ab98cf9d",
      title: "Document: Best Practices for Job Coaching",
      category: "Resource",
      content:
        "I've compiled a comprehensive guide on best practices for job coaching based on 5 years of experience...",
      isPdf: true,
    },
  ];

  return (
    <div className="flex flex-col bg-gray-50 min-h-[screen]">
      <DashboardHeader userInfo={userInfo} onLogout={onLogout} />
      <div className="flex flex-1">
        <DashboardSidebar onNavigate={onNavigate} />
        <main className="flex-1 p-10 max-sm:p-5">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl text-black">Tribal Knowledge</h1>
            <button className="flex gap-2 items-center px-4 py-2.5 text-white bg-indigo-600 rounded-lg">
              <svg>...</svg>
              <span className="text-base">New Post</span>
            </button>
          </div>

          <div className="flex flex-col gap-5 mb-6">
            <SearchAndFilter />
          </div>

          <div className="flex flex-col gap-5">
            {discussionPosts.map((post, index) => (
              <DiscussionPost key={index} {...post} />
            ))}
          </div>

          <Pagination />
        </main>
      </div>
    </div>
  );
};

export default JobCoachDashboard;
