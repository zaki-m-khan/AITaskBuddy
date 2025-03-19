"use client";

export const AvatarSelection = ({ selectedBuddy, setSelectedBuddy }) => {
  const avatars = [1, 2, 3, 4];
  
  return (
    <section className="mb-6">
      <h3 className="mb-4 text-xl">Choose Your AI Buddy</h3>
      <div className="flex gap-4 mb-6 max-md:flex-wrap max-md:justify-center">
        {avatars.map((index) => (
          <button
            key={index}
            className={`flex justify-center items-center rounded-lg cursor-pointer ${
              selectedBuddy === index ? 'border-2 border-indigo-600' : ''
            } bg-neutral-100 h-[168px] w-[168px] max-sm:w-full`}
            aria-label={`Select AI Buddy ${index}`}
            onClick={() => setSelectedBuddy(index)}
          >
            <img
              src={`/avatars/avatar_${index}.png`}
              alt={`AI Buddy ${index}`}
              className="w-[132px] h-[132px]"
            />
          </button>
        ))}
      </div>
    </section>
  );
};
