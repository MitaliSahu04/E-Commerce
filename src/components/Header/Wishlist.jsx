import { Heart, X } from "lucide-react";

const Wishlist = ({ isWishlistOpen, setIsWishlistOpen }) => {
  return (
    <>
      <button
        onClick={() => setIsWishlistOpen(true)}
        className="flex flex-col items-center text-gray-700 hover:text-red-500"
      >
        <Heart className="w-6 h-6" />
        <p className="text-xs mt-1">Wishlist</p>
      </button>

      {isWishlistOpen && (
        <div
          onClick={() => setIsWishlistOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      <div
        className={`fixed top-0 right-0 h-screen w-[380px] bg-white shadow-2xl z-50 transition-transform duration-300 ${
          isWishlistOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-xl font-bold">My Wishlist</h2>

          <button onClick={() => setIsWishlistOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="p-5">
          <p>Your wishlist is empty.</p>
        </div>
      </div>
    </>
  );
};

export default Wishlist;