import React from "react";
import { Layout } from "../shared/Layout";

const Dashboard = ({ onNavigate, onLogout, userInfo, userRole }) => {
  return (
    <Layout 
      userInfo={userInfo} 
      userRole={userRole} 
      onLogout={onLogout}
      currentPage="dashboard"
      onNavigate={onNavigate}
    >
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard Overview</h1>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-gray-700 font-medium mb-2">Active Tasks</h3>
            <p className="text-3xl font-bold text-indigo-600">12</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-gray-700 font-medium mb-2">Completed Tasks</h3>
            <p className="text-3xl font-bold text-green-600">24</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-gray-700 font-medium mb-2">Upcoming Check-ins</h3>
            <p className="text-3xl font-bold text-orange-600">5</p>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2">
            {/* Employee Progress */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-6">Employee Progress</h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-gray-800">John Doe</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">
                      On Track
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-500" 
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">75% of tasks completed</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-gray-800">Jane Smith</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-800">
                      Needs Attention
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-amber-500" 
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">45% of tasks completed</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-gray-800">Robert Johnson</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">
                      On Track
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-500" 
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">90% of tasks completed</p>
                </div>
              </div>
            </div>

            {/* Upcoming Check-ins */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-6">Upcoming Check-ins</h2>
              
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">Weekly Progress Review</h3>
                      <p className="text-sm text-gray-600">Review job search progress and set new goals</p>
                    </div>
                    <span className="text-xs text-gray-500">Tomorrow, 10:00 AM</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">Resume Feedback Session</h3>
                      <p className="text-sm text-gray-600">Discuss resume improvements and updates</p>
                    </div>
                    <span className="text-xs text-gray-500">Wed, 2:30 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Task Templates */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">Task Templates</h2>
            
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg hover:border-indigo-200 hover:bg-indigo-50 transition-colors">
                <h3 className="font-medium text-gray-800 mb-1">Job Application Process</h3>
                <p className="text-sm text-gray-600">Template for tracking job applications</p>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg hover:border-indigo-200 hover:bg-indigo-50 transition-colors">
                <h3 className="font-medium text-gray-800 mb-1">Interview Preparation</h3>
                <p className="text-sm text-gray-600">Steps to prepare for job interviews</p>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg hover:border-indigo-200 hover:bg-indigo-50 transition-colors">
                <h3 className="font-medium text-gray-800 mb-1">Weekly Check-in</h3>
                <p className="text-sm text-gray-600">Regular progress tracking template</p>
              </div>
              
              <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                Create New Template
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard; 