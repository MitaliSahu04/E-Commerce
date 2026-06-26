import { useContext } from "react";
import { UserContext } from "../context/CreateUserContext";

const CartSlider = ({ showCart, setShowCart }) => {
  const { cartItems } = useContext(UserContext);
  return (
    <>
      {showCart && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setShowCart(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-screen w-80 bg-white shadow-lg z-50
        transform transition-transform duration-300
        ${showCart ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">My Cart</h2>

          <button onClick={() => setShowCart(false)}>
            ✕
          </button>
        </div>

        <div className="p-4">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item._id}>
                <p>{item.title}</p>
                <p>₹{item.price}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default CartSlider;