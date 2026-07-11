import { ShoppingCart } from "lucide-react";
import { useApp } from "../../context/CreateUserContext";

const CartButton = ({ setShowCart }) => {
  const { cartCount } = useApp();

  return (
    <button
      onClick={() => setShowCart(true)}
      className="relative flex flex-col items-center text-gray-700 hover:text-green-600"
    >
      <div className="relative">
        <ShoppingCart className="w-6 h-6" />

        <span className="absolute -top-2 -right-2 flex items-center justify-center min-w-[18px] h-[18px] rounded-full bg-red-500 text-white text-[10px]">
          {cartCount}
        </span>
      </div>

      <p className="text-xs mt-1">Cart</p>
    </button>
  );
};

export default CartButton;