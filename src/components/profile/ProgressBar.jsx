export const ProgressBar = ({ currentStep }) => {
  return (
    <div className="mb-8">
      <h2 className="mb-2 text-3xl">Profile Setup</h2>
      <div className="flex gap-2 h-2">
        <div className={`flex-1 h-2 rounded ${currentStep >= 1 ? 'bg-indigo-600' : 'bg-neutral-300'}`} />
        <div className={`flex-1 h-2 rounded ${currentStep >= 2 ? 'bg-indigo-600' : 'bg-neutral-300'}`} />
        <div className={`flex-1 h-2 rounded ${currentStep >= 3 ? 'bg-indigo-600' : 'bg-neutral-300'}`} />
        <div className={`flex-1 h-2 rounded ${currentStep >= 4 ? 'bg-indigo-600' : 'bg-neutral-300'}`} />
      </div>
    </div>
  );
};
