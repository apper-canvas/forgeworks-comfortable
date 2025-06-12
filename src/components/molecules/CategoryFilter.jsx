const CategoryFilter = ({ categories, selectedCategory, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelect(category.id)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            selectedCategory === category.id
              ? 'bg-accent text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;