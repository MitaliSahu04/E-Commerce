import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FilterSidebar from "../components/FilterSideBar";
import axios from "axios";
import { CategorySlug } from "../services/filterapi";

function CategoryPdp() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      setProducts([]);

      try {
        const productRes = await CategorySlug(slug)
        console.log(productRes)
        setProducts(productRes);
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
          <FilterSidebar />

          <div className="flex-1 p-6">
            <h1 className="text-3xl font-bold capitalize mb-6">
              {slug?.replace("-", " ")}
            </h1>

            {products.length === 0 ? (
              <p className="text-gray-500 text-lg">
                No products found for this category.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div
                    onClick={() => handleCategoryProduct(product.id)} //navigate that product 
                    key={product.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
                  >
                    <img
                      src={
                        product.images?.[0] || "https://via.placeholder.com/300"
                      }
                      alt={product.title}
                      className="w-full h-60 object-cover"
                    />

                    <div className="p-4">
                      <span className="text-sm text-gray-500">
                        {product.category?.name}
                      </span>

                      <h2 className="text-lg font-semibold mt-2">
                        {product.title}
                      </h2>

                      <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                        {product.description}
                      </p>

                      <div className="flex justify-between items-center mt-4">
                        <span className="text-xl font-bold text-green-600">
                          ₹{product.price}
                        </span>

                        <button className="bg-[#FF6B6B] hover:bg-[#e05555] text-white text-xs font-semibold tracking-wider uppercase px-5 py-2.5 rounded-full">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default CategoryPdp;
