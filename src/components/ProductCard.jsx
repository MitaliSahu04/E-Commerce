import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import AddToCart from "../components/AddToCart"

function ProductCard(props) {
  const navigate = useNavigate();

  function HandleChangeToPdp(id) {
      navigate(`/product/${id}`);
    }
 return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {props.productData.length === 0 ? (
        <div className="col-span-full flex items-center justify-center min-h-[60vh]">
          <p className="text-gray-500 text-lg text-center">
            We couldn't find any products matching your search.
          </p>
        </div>
      ) : (
        props.productData.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
           >
            <div >
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-full h-60 object-cover cursor-pointer"
                      onClick={() => HandleChangeToPdp(product.id)}
                    />

                    <div className="p-4">
                <span className="text-sm text-gray-500">
                        {product.category.name}
                      </span>
                      
                <h2 className="text-lg font-semibold mt-2 line-clamp-1">{product.title}</h2>

                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                        {product.description}
                      </p>
                      </div>
                      </div>

                    <div className="flex justify-between items-center p-4">
                        {/* Price */}
                        <span className="text-xl font-bold text-green-600">
                            ₹{product.price}
                        </span>

                        {/* Wishlist + Add to Cart */}
                        <div className="flex items-center gap-5">
                            <button className="text-gray-700 hover:text-red-500 transition">
                            <Heart className="w-6 h-6" />
                            </button>

                            <AddToCart />
                        </div>
                        </div>
                        </div>
        ))
)}
    </div>
  );
}

export default ProductCard;
