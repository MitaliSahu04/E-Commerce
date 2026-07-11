import { useEffect, useState } from "react";
import { CategoryListNameData } from "../services/filterapi";

function FilterSidebar({ filter, setFilter, categoryNameShow, combineCategory }) {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryData = await CategoryListNameData();
        console.log(categoryData);

        setCategoryList(categoryData); // or categoryData.data depending on your function
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <aside className="w-72 min-h-screen bg-white border-r border-gray-200 p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Filters</h2>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Price Range</h3>

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
      {categoryNameShow ? (
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Category</h3>

          <div className="space-y-2">
            {Array.isArray(categoryList) &&
              categoryList.map((category) => (
                <div key={category.id}>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="categoryId" value={category.id} />
                    <span>{category.name}</span>
                  </label>
                </div>
              ))}
          </div>
        </div>
      ) : null}

      {/* Combination Filters */}
      {combineCategory ? (
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Combination Filters
          </h3>

          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input type="radio" name="comboFilter" checked={""} />
              <span>Electronics Under ₹1000</span>
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="comboFilter" />
              <span>Clothes Above ₹500 </span>
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="comboFilter" />
              <span>Furniture Under ₹5000</span>
            </label>
          </div>
        </div>
      ) : null}

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
}

export default FilterSidebar;
