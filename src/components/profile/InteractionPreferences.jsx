export const InteractionPreferences = () => {
  const preferences = [
    {
      name: "Audio",
      icon: `<svg width="31" height="24" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.6687 1.52332C28.7109 3.99832 30.6562 7.77176 30.6562 11.9999C30.6562 16.228 28.7109 20.0061 25.6687 22.4764C25.1859 22.8702 24.4781 22.7952 24.0844 22.3124C23.6906 21.8296 23.7656 21.1218 24.2484 20.728C26.7891 18.6655 28.4062 15.5249 28.4062 11.9999C28.4062 8.47489 26.7891 5.33426 24.2484 3.26707C23.7656 2.87332 23.6953 2.16551 24.0844 1.6827C24.4734 1.19989 25.1859 1.12957 25.6687 1.51864V1.52332Z" fill="white"/>
      </svg>`,
      bgColor: "bg-indigo-600",
      textColor: "text-white",
    },
    {
      name: "Visual",
      icon: `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.984375 4.5C0.984375 2.84531 2.32969 1.5 3.98438 1.5H21.9844C23.6391 1.5 24.9844 2.84531 24.9844 4.5V19.5C24.9844 21.1547 23.6391 22.5 21.9844 22.5H3.98438C2.32969 22.5 0.984375 21.1547 0.984375 19.5V4.5Z" fill="black"/>
      </svg>`,
      bgColor: "bg-neutral-100",
      textColor: "text-black",
    },
    {
      name: "Text",
      icon: `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.3125 18.375C13.0374 18.375 13.625 17.7874 13.625 17.0625C13.625 16.3376 13.0374 15.75 12.3125 15.75C11.5876 15.75 11 16.3376 11 17.0625C11 17.7874 11.5876 18.375 12.3125 18.375Z" fill="black"/>
      </svg>`,
      bgColor: "bg-neutral-100",
      textColor: "text-black",
    },
  ];

  return (
    <section className="mb-6">
      <h3 className="mb-4 text-xl">Interaction Preferences</h3>
      <div className="flex gap-4 mb-6 max-md:flex-wrap max-md:justify-center">
        {preferences.map((pref) => (
          <button
            key={pref.name}
            className={`flex flex-col gap-2 justify-center items-center rounded-lg cursor-pointer h-[88px] w-[229px] max-sm:w-full ${pref.bgColor}`}
          >
            <div dangerouslySetInnerHTML={{ __html: pref.icon }} />
            <span className={pref.textColor}>{pref.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
};
