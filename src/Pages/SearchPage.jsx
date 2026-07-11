import React, { useEffect, useState } from "react";
import FilterSidebar from "../components/FilterSideBar";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SearchProduct } from "../services/filterapi";
function SearchPage() {
  const { search } = useParams();
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState({
    min_price: 0,
    max_price: 0,
    category: "",
    search: "",
  });
  const perPage = 9;
  const lastIndex = currentPage * perPage;
  const firstIndex = lastIndex - perPage;

  useEffect(() => {
    async function searchProduct() {
      try {
        const searchData = await SearchProduct(search);
        setProductData(searchData);
      } catch (error) {
        console.log(error);
      }
    }
    searchProduct()
  }, [search]);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="flex">
          <FilterSidebar
            filter={filter}
            setFilter={setFilter}
            categoryNameShow={true}
            combineCategory={true}
          />

          <div className="flex-1 p-6">
            <h1 className="text-3xl font-bold mb-6">Products</h1>

            <div>
              <ProductCard
                productData={productData.slice(firstIndex, lastIndex)}
              />
            </div>

            <div>
              <Pagination
                productData={productData}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                perPage={perPage}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default SearchPage;
