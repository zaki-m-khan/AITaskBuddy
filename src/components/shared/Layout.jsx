import React from "react";
import Sidebar from "./Sidebar";
import TopHeader from "./TopHeader";

export function Layout({ children, userInfo, userRole, onLogout, currentPage, onNavigate }) {
  return (
    <div className="min-h-screen flex">
      <Sidebar currentPage={currentPage} userRole={userRole} onNavigate={onNavigate} />
      <div className="flex-1 flex flex-col">
        <TopHeader userInfo={userInfo} onLogout={onLogout} />
        <div className="flex-1 bg-gray-50 p-8">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout; 