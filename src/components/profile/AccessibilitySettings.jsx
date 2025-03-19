"use client";

export const AccessibilitySettings = ({ settings, setSettings }) => {
  const handleSliderChange = (setting, value) => {
    setSettings({
      ...settings,
      [setting]: value
    });
  };

  const handleComplexityChange = (complexity) => {
    setSettings({
      ...settings,
      uiComplexity: complexity
    });
  };

  return (
    <section className="mb-6">
      <h3 className="mb-4 text-xl">Accessibility Settings</h3>
      <div className="mb-6">
        <div className="mb-4">
          <label className="block mb-2">Text Size</label>
          <input
            type="range"
            min="0"
            max="100"
            value={settings.textSize}
            onChange={(e) => handleSliderChange('textSize', parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Voice Speed</label>
          <input
            type="range"
            min="0"
            max="100"
            value={settings.voiceSpeed}
            onChange={(e) => handleSliderChange('voiceSpeed', parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">UI Complexity</label>
          <select
            value={settings.uiComplexity}
            onChange={(e) => handleComplexityChange(e.target.value)}
            className="flex justify-between items-center w-full px-3 py-0 h-10 bg-white rounded-lg border border-solid cursor-pointer"
          >
            <option value="simple">Simple</option>
            <option value="medium">Medium</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
      </div>
    </section>
  );
};
