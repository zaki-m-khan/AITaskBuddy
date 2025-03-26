"use client";
import React from "react";
import { BriefcaseIcon, NotificationIcon } from "./Icons";

export const DashboardHeader = ({ userInfo, onLogout }) => {
  const displayName = userInfo?.name || "User";
  const avatarUrl = userInfo?.photoURL || "https://cdn.builder.io/api/v1/image/assets/TEMP/d7af5e31e4460333e29f949fdd57a5d228908b42";

  return (
    <header className="flex justify-center items-center w-full bg-white border h-[73px]">
      <div className="flex justify-between items-center px-6 py-4 w-full h-[72px]">
        <div className="flex gap-3 items-center">
          <BriefcaseIcon />
          <h1 className="text-xl font-bold leading-5 text-gray-900">
            Job Coach Dashboard
          </h1>
        </div>
        <div className="flex gap-4 items-center">
          <button
            className="flex justify-center items-center"
            aria-label="Notifications"
          >
            <NotificationIcon />
          </button>
          <div className="relative group">
            <img
              src={avatarUrl}
              alt="User profile"
              className="w-[40px] h-[40px] rounded-[9999px] cursor-pointer"
            />
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
              <p className="px-4 py-2 text-sm text-gray-700">{displayName}</p>
              <button 
                onClick={onLogout}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
