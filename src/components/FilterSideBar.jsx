function FilterSidebar({ filters,
                          setFilters,
                          pendingFilters,
                          setPendingFilters,
                          applyFilters,
                          resetFilters,
                         
                        })  {

  return (
    <aside className="w-72 min-h-screen bg-white border-r border-gray-200 p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Filters</h2>

      {/* Price Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Price
        </label>
        <input
          type="number"
          placeholder="Enter price"
          name="price_max"
          min="0"
          value={filters.price_max}
          onChange={(e) =>
            setFilters({
            ...filters,
            price_max: Math.max(0, Number(e.target.value)),
          })
          }
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
            <input
             type="radio"
             name="priceRange"
            onChange={() =>
               setFilters({
              ...filters,
               price_min: 0,
               price_max: 500,
             })
            }
          />
            <span>₹0 - ₹500</span>
          </label>

          <label className="flex items-center gap-2">
            <input type="radio" name="priceRange"
               onChange={() =>
               setFilters({
               ...filters,
              price_min: 500,
              price_max: 1000,
              })
            }
            />
            <span>₹500 - ₹1000</span>
          </label>

          <label className="flex items-center gap-2">
            <input type="radio" name="priceRange"
             onChange={() =>
             setFilters({
            ...filters,
            price_min: 1000,
            price_max: 5000,
            })
          }
            />
            <span>₹1000 - ₹5000</span>
          </label>

          <label className="flex items-center gap-2">
            <input type="radio" name="priceRange"
             onChange={() =>
             setFilters({
            ...filters,
            price_min: 5000,
            price_max: "",
             })
          }
            />
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
            <input type="radio"
                    name="categoryId"
                    value="1"
                    checked={filters.categoryId === "1"}
                    onChange={(e) =>
                      setFilters({
                      ...filters,
                     categoryId: e.target.value,
                    })
        }
            />
            <span>Clothes</span>
          </label>

          <label className="flex items-center gap-2">
            <input type="radio"
             name="categoryId"
             value="2"
             checked={filters.categoryId === "2"}
             onChange={(e) =>
             setFilters({
                ...filters,
                categoryId: e.target.value,
              })
           }
            />
            <span>Electronics</span>
          </label>

          <label className="flex items-center gap-2">
            <input type="radio"
             name="categoryId"
             value="3"
             checked={filters.categoryId === "3"}
             onChange={(e) =>
             setFilters({
                ...filters,
                categoryId: e.target.value,
              })
            }
            />
            <span>Furniture</span>
          </label>

          <label className="flex items-center gap-2">
            <input type="radio"
             name="categoryId"
             value="4"
             checked={filters.categoryId === "4"}
             onChange={(e) =>
             setFilters({
                ...filters,
                categoryId: e.target.value,
            })
            }
            />
            <span>Shoes</span>
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
            <input type="radio"
                name="comboFilter"
                checked={pendingFilters.electronicsUnder1000}
                onChange={()=>
                setPendingFilters({
                electronicsUnder1000:true,
                fashionAbove500:false,
                homeUnder5000:false
        })
    }
            />
            <span>Electronics Under ₹1000</span>
          </label>

          <label className="flex items-center gap-2">
            <input type="radio"
             name="comboFilter"
             checked={pendingFilters.fashionAbove500}
             onChange={(e)=>
             setPendingFilters({
              electronicsUnder1000:false,
              fashionAbove500:true,
              homeUnder5000:false
            })
            }
            />
            <span>Clothes Above ₹500  </span>
          </label>

          <label className="flex items-center gap-2">
            <input type="radio"
            name="comboFilter"
            checked={pendingFilters.homeUnder5000}
            onChange={(e)=>
             setPendingFilters({
            electronicsUnder1000:false,
            fashionAbove500:false,
            homeUnder5000:true
            })
          }
            />
            <span>Furniture Under ₹5000</span>
          </label>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-3">
        <button
          onClick={applyFilters}
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
          Apply Filters
        </button>

        

        <button 
          onClick={resetFilters}
          className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100"
          >
          Reset Filters
        </button>
      </div>
    </aside>
  );
};

export default FilterSidebar;