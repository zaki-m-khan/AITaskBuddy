export const NavigationButtons = ({ currentStep, onNext, onBack }) => {
  return (
    <div className="flex justify-between mt-8">
      <button 
        className="h-10 text-base rounded-lg cursor-pointer bg-neutral-200 border-none w-[85px]"
        onClick={onBack}
        disabled={currentStep === 1}
        style={{ opacity: currentStep === 1 ? 0.5 : 1 }}
      >
        Back
      </button>
      <button 
        className="h-10 text-base text-white bg-indigo-600 rounded-lg cursor-pointer border-none w-[85px] hover:bg-indigo-700"
        onClick={onNext}
      >
        {currentStep === 4 ? "Finish" : "Next"}
      </button>
    </div>
  );
};
