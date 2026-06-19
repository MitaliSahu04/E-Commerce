// Header.jsx
import { Menu, ShoppingCart, Heart, User, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            ShopEase
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="hover:text-blue-600">Home</a>
            <a href="/products" className="hover:text-blue-600">Products</a>
            <a href="/categories" className="hover:text-blue-600">Categories</a>
            <a href="/about" className="hover:text-blue-600">About</a>
            <a href="/contact" className="hover:text-blue-600">Contact</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center border rounded-lg px-3 py-2 w-80">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search products..."
              className="outline-none ml-2 w-full"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button>
              <Heart className="hover:text-red-500" />
            </button>

            <button className="relative">
              <ShoppingCart />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                2
              </span>
            </button>

            <button>
              <User />
            </button>

            {/* Mobile Menu */}
            <button className="md:hidden">
              <Menu />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;