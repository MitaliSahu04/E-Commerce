import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FilterSidebar from "../components/FilterSideBar";

function CategoryData() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    setLoading(true);

    async function fetchProduct() {
      try {
        const res = await axios.get(
          `https://api.escuelajs.co/api/v1/products/${id}`,
        );

        setProduct(res.data);
        setSelectedImage(res.data.images?.[0] || "");
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  const discount = product ? ((product.id % 5) + 1) * 10 : 0;

  const originalPrice = product
    ? Math.round(product.price / (1 - discount / 100))
    : 0;

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="loader"></div>
        </div>
      ) : product ? (
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* LEFT SIDE */}
              <div>
                <div className="border rounded-2xl overflow-hidden">
                  <img
                    src={selectedImage}
                    alt={product.title}
                    className="w-full h-[500px] object-cover"
                  />
                </div>

                <div className="flex gap-3 mt-4">
                  {product.images?.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(image)}
                      className={`border-2 rounded-lg overflow-hidden ${
                        selectedImage === image
                          ? "border-orange-500"
                          : "border-gray-200"
                      }`}
                    >
                      <img
                        src={image}
                        alt=""
                        className="w-20 h-20 object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div>
                <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold">
                  {product.category?.name}
                </span>

                <h1 className="text-4xl font-bold text-gray-900 mt-4">
                  {product.title}
                </h1>

                <div className="flex items-center gap-3 mt-4">
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">
                    ★ 4.5
                  </span>

                  <span className="text-gray-500">1,245 Ratings</span>
                </div>

                {(() => {
                  const discount = 30;
                  const originalPrice = Math.round(
                    product.price / (1 - discount / 100),
                  );

                  return (
                    <div className="mt-6">
                      <div className="flex items-center gap-4 flex-wrap">
                        <span className="text-4xl font-bold text-gray-900">
                          ₹{product.price}
                        </span>

                        <span className="text-2xl text-gray-400 line-through">
                          ₹{originalPrice}
                        </span>

                        <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full font-semibold">
                          {discount}% OFF
                        </span>
                      </div>

                      <p className="text-green-600 mt-2">
                        Inclusive of all taxes
                      </p>
                    </div>
                  );
                })()}

                <div className="mt-8">
                  <h2 className="text-xl font-semibold mb-3">Description</h2>

                  <p className="text-gray-600 leading-8">
                    {product.description}
                  </p>
                </div>

                <div className="flex gap-4 mt-10">
                  <button
                    onClick={() => {}}
                    className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-4 rounded-xl transition"
                  >
                    Add to Cart
                  </button>

                  <button
                    onClick={() => {}}
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-xl transition"
                  >
                    Buy Now
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8 text-sm text-gray-600">
                  <div>🚚 Free Delivery</div>
                  <div>↩️ 7 Days Return</div>
                  <div>🔒 Secure Payment</div>
                  <div>🏷️ Best Price Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center mt-10 text-red-500 text-xl">
          Product not found
        </div>
      )}
    </>
  );
}

export default CategoryData;
