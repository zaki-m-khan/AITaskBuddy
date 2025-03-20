"use client";

export function AccessibilitySettings({ 
  textSize, 
  setTextSize, 
  voiceSpeed, 
  setVoiceSpeed, 
  complexity, 
  setComplexity 
}) {
  const handleTextSizeChange = (e) => {
    setTextSize(parseInt(e.target.value));
  };

  const handleVoiceSpeedChange = (e) => {
    setVoiceSpeed(parseInt(e.target.value));
  };

  const handleComplexityChange = (e) => {
    setComplexity(e.target.value);
  };

  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Accessibility Settings</h3>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Text Size</label>
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={textSize} 
          onChange={handleTextSizeChange} 
          className="w-full"
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Voice Speed</label>
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={voiceSpeed} 
          onChange={handleVoiceSpeedChange} 
          className="w-full"
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">UI Complexity</label>
        <select 
          value={complexity} 
          onChange={handleComplexityChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="simple">Simple</option>
          <option value="standard">Standard</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>
    </div>
  );
}
