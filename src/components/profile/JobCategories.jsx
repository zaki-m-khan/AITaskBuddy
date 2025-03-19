export const JobCategories = ({ categories, setCategories }) => {
  const allCategories = [
    "Office Work",
    "Retail",
    "Food Service",
    "Manufacturing",
    "Warehouse"
  ];

  const toggleCategory = (category) => {
    if (categories.includes(category)) {
      setCategories(categories.filter(c => c !== category));
    } else {
      setCategories([...categories, category]);
    }
  };

  return (
    <section className="mb-6">
      <h3 className="mb-4 text-xl">Job Categories</h3>
      <div className="flex flex-wrap gap-2 mb-6">
        {allCategories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2.5 h-10 whitespace-nowrap rounded-full cursor-pointer ${
              categories.includes(category) ? 'bg-indigo-600 text-white' : 'bg-neutral-100 text-black'
            } max-sm:w-full`}
            onClick={() => toggleCategory(category)}
          >
            {category}
          </button>
        ))}
        <button
          className="px-4 py-2.5 h-10 whitespace-nowrap rounded-full cursor-pointer bg-neutral-100 text-black max-sm:w-full"
        >
          + Add Custom
        </button>
      </div>
    </section>
  );
};
