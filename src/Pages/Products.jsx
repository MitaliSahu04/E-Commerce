import axios from "axios";
import { useEffect, useState } from "react";
import FilterSideBar from "../components/FilterSideBar";
import { useNavigate } from "react-router-dom";
import {Heart,} from "lucide-react";


const Products = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const { productID } = useParams();


  useEffect(() => {
    async function fetchProductData() {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/products"
        );
        setProductData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    fetchProductData();
  }, []);



function HandleChangeToPdp(id){
  navigate(`/product/${id}`);

}


// function handleProductClick({id}){
//   navigate(`/product/${product.id}`)

// }



  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="flex">
          <FilterSideBar />

          <div className="flex-1 p-6">
            <h1 className="text-3xl font-bold mb-6">Products</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productData.map((product) => {
                return (

                  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                   <div  onClick={() => HandleChangeToPdp(product.id)} >
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-full h-60 object-cover"
                      // onClick={() => handleProductClick(product.id)}
                    />

                    <div className="p-4">
                      <span className="text-sm text-gray-500">
                        {product.category.name}
                      </span>
                      
                      <h2 className="text-lg font-semibold mt-2">
                        {product.title}
                      </h2>

                      <p className="text-gray-600 text-sm mt-2">
                        {product.description}
                      </p>

                      </div>
                      </div>


                      <div className="flex justify-between items-center mt-4">
                        <span className="text-xl font-bold text-green-600">
                          &#8377;{product.price}
                        </span>

                        {/* Wishlist */}
                       <div className="flex items-center gap-3">
                       <button className="flex flex-col items-center text-gray-700 hover:text-red-500 transition">
                       <Heart className="w-6 h-6" />
                       </button>

                        <button className="cta-btn inline-block bg-[#FF6B6B] hover:bg-[#e05555] text-white text-xs font-semibold tracking-wider uppercase px-5 py-2.5 rounded-full">
                          Add to Cart
                        </button>
                        </div>
                      </div>
                    
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;