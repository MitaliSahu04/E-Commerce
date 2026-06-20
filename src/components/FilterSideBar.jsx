function  FilterSidebar() {
  return (
    <aside className="w-72 min-h-screen bg-white border-r border-gray-200 p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Filters</h2>

      {/* Title Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Search Product
        </label>
        <input
          type="text"
          placeholder="Enter title..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
        />
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Price
        </label>
        <input
          type="number"
          placeholder="Enter price"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
        />
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">
          Price Range
        </h3>

        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="radio" name="priceRange" />
            <span>₹0 - ₹500</span>
          </label>

          <label className="flex items-center gap-2">
            <input type="radio" name="priceRange" />
            <span>₹500 - ₹1000</span>
          </label>

          <label className="flex items-center gap-2">
            <input type="radio" name="priceRange" />
            <span>₹1000 - ₹5000</span>
          </label>

          <label className="flex items-center gap-2">
            <input type="radio" name="priceRange" />
            <span>₹5000+</span>
          </label>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">
          Category
        </h3>

        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            <span>Electronics</span>
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            <span>Fashion</span>
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            <span>Home & Kitchen</span>
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            <span>Beauty</span>
          </label>
        </div>
      </div>

      {/* Combination Filters */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">
          Combination Filters
        </h3>

        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            <span>Electronics Under ₹1000</span>
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            <span>Fashion Above ₹500</span>
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            <span>Home Products Under ₹5000</span>
          </label>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-3">
        <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
          Apply Filters
        </button>

        <button className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100">
          Reset Filters
        </button>
      </div>
    </aside>
  );
};

export default FilterSidebar;