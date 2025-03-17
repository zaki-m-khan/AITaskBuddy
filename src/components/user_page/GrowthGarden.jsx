import React from "react";

function GrowthGarden() {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-gray-800">Growth Garden</h2>
      <div className="flex justify-center">
        <div className="w-full max-w-[300px] h-[150px] bg-amber-100 rounded-lg flex items-end justify-center p-4">
          <div className="flex items-end space-x-4">
            <Plant height={40} />
            <Plant height={80} />
            <Plant height={60} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Plant({ height }) {
  return (
    <div className="flex flex-col items-center">
      <div 
        className="w-4 bg-green-500 rounded-t-full" 
        style={{ height: `${height}px` }}
      />
      <div className="w-12 h-6 bg-brown-600 rounded-t-lg -mt-1" />
    </div>
  );
}

export default GrowthGarden; 