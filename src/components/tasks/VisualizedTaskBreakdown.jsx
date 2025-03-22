import React, { useState } from "react";
import { visualizeSteps } from "../../services/imageService";

const VisualizedTaskBreakdown = ({ steps }) => {
  const [visualizedSteps, setVisualizedSteps] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateVisualizations = async () => {
    if (!steps || steps.length === 0) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const visualizedData = await visualizeSteps(steps);
      setVisualizedSteps(visualizedData);
    } catch (error) {
      console.error("Error visualizing task steps:", error);
      setError(error.message || "Failed to generate visual aids for the task");
    } finally {
      setIsLoading(false);
    }
  };

  if (!steps || steps.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-indigo-700">Visual Task Guide</h3>
        {visualizedSteps.length === 0 && !isLoading && (
          <button 
            onClick={generateVisualizations}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            Generate Visual Guide
          </button>
        )}
      </div>
      
      {isLoading ? (
        <div className="flex justify-center items-center py-8">
          <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
          <span className="ml-3 text-gray-600">Generating visual aids...</span>
        </div>
      ) : error ? (
        <div className="p-4 bg-red-50 rounded text-red-700">
          <p>{error}</p>
          <button 
            className="mt-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200"
            onClick={generateVisualizations}
          >
            Try Again
          </button>
        </div>
      ) : visualizedSteps.length > 0 ? (
        <div className="space-y-6">
          {visualizedSteps.map((item, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <div className="p-4 bg-gray-50 border-b">
                <h4 className="font-medium text-gray-800">Step {index + 1}</h4>
                <p className="mt-1 text-gray-700">{item.step}</p>
              </div>
              <div className="p-4 flex justify-center">
                {item.imageUrl ? (
                  <img 
                    src={item.imageUrl} 
                    alt={`Visual aid for step ${index + 1}`} 
                    className="max-h-64 object-contain"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-32 w-full bg-gray-100 rounded text-gray-500">
                    <svg className="w-10 h-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                    </svg>
                    <span>Could not generate image</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-8 text-center text-gray-500">
          <p>Click "Generate Visual Guide" to create visual aids for your task steps</p>
          <p className="text-xs mt-2">This will create illustrations for up to 3 steps of your task</p>
        </div>
      )}
    </div>
  );
};

export default VisualizedTaskBreakdown; 