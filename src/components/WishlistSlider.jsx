import { X, ShoppingCart, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

function WishlistSlider({
  isOpen,
  onClose,
  wishlist,
  removeFromWishlist,
}) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Slider */}
      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-[420px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b">
          <h2 className="text-2xl font-bold">
            Wishlist ({wishlist.length})
          </h2>

          <button onClick={onClose}>
            <X size={28} />
          </button>
        </div>

        {/* Empty State */}
        {wishlist.length === 0 ? (
          <div className="h-[80%] flex flex-col justify-center items-center px-6 text-center">
            <div className="text-6xl">❤️</div>

            <h3 className="text-xl font-semibold mt-4">
              Your Wishlist is Empty
            </h3>

            <p className="text-gray-500 mt-2">
              Save your favourite products here.
            </p>

            <Link
              to="/products"
              onClick={onClose}
              className="mt-6 bg-black text-white px-6 py-3 rounded-lg"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Products */}
            <div className="overflow-y-auto h-[calc(100%-150px)] p-4 space-y-4">
              {wishlist.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 border rounded-xl p-3 hover:shadow-md transition"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 rounded-lg object-cover"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-lg font-bold mt-2">
                      ₹{item.price}
                    </p>

                    <div className="flex gap-2 mt-4">
                      <button className="flex-1 bg-black text-white py-2 rounded-lg flex justify-center items-center gap-2">
                        <ShoppingCart size={18} />
                        Add
                      </button>

                      <button
                        onClick={() => removeFromWishlist(item.id)}
                        className="border border-red-500 text-red-500 p-2 rounded-lg hover:bg-red-500 hover:text-white"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 border-t bg-white p-4">
              <Link
                to="/wishlist"
                onClick={onClose}
                className="block text-center bg-black text-white py-3 rounded-lg font-semibold"
              >
                View Full Wishlist
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default WishlistSlider