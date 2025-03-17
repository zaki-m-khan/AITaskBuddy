import React from "react";

function AchievementCard() {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-gray-800">Recent Achievements</h2>
      <div className="flex items-center gap-4 p-3 bg-amber-50 rounded-lg">
        <div className="text-2xl">🌟</div>
        <div>
          <h3 className="font-medium text-gray-800">Task Master</h3>
          <p className="text-sm text-gray-600">Completed 10 tasks this week</p>
        </div>
      </div>
    </div>
  );
}

export default AchievementCard; 