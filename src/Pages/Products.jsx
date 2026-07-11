import axios from "axios";
import { useEffect, useState } from "react";
import FilterSideBar from "../components/FilterSideBar";
import { ProductPageApi } from "../services/ProductApi";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";


const Products = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState({
    min_price: 0,
    max_price: 0,
    category : "",
    search : "",
  })
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;

  useEffect(() => {
    async function fetchProductData() {
      setLoading(true);
      try {
        const response = await ProductPageApi();
        console.log(ProductPageApi());
        setProductData(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    fetchProductData();
  }, []);

  





const lastIndex = currentPage * perPage;
  const firstIndex = lastIndex - perPage;


  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="loader"></div>
        </div>
      ) : (

        <div className="flex">
          <FilterSideBar
            filter={filter}
            setFilter={setFilter}
            categoryNameShow={true}
            combineCategory={true}
          />

          <div className="flex-1 p-6">
            <h1 className="text-3xl font-bold mb-6">Products</h1>

            <div >
              <ProductCard productData={productData.slice(firstIndex,lastIndex)}/> 
            </div>

            <div >
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
};

export default Products;