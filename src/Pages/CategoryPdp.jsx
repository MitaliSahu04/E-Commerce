import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FilterSidebar from "../components/FilterSideBar";
import axios from "axios";
import { CategorySlug } from "../services/filterapi";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";

function CategoryPdp() {
  const { slug } = useParams();
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState({
     min_price: 0,
     max_price: 0,
     category: "",
     search: "",
   });
  const navigate = useNavigate();

  const perPage = 9;
  const lastIndex = currentPage * perPage;
  const firstIndex = lastIndex - perPage;

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const productRes = await CategorySlug(slug)
        setProductData(productRes);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [slug]);

  function handleCategoryProduct(id) {
    navigate(`/product/${id}`);
  }

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

export default CategoryPdp;
