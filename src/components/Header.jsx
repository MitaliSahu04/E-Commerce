import React from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  ShoppingCart,
  Heart,
  User,
  Search,
} from "lucide-react";

const Header = () => {
  const navStyle = ({ isActive }) =>
    isActive
      ? "text-blue-600 border-b-2 border-blue-600 pb-1 font-semibold"
      : "text-gray-700 hover:text-blue-600 pb-1 border-b-2 border-transparent transition-all";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl font-bold text-blue-600"
          >
            ShopEase
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" end className={navStyle}>
              Home
            </NavLink>

            <NavLink to="/products" className={navStyle}>
              Products
            </NavLink>

            <NavLink to="/categories" className={navStyle}>
              Categories
            </NavLink>

            <NavLink to="/about" className={navStyle}>
              About
            </NavLink>

            <NavLink to="/contact" className={navStyle}>
              Contact
            </NavLink>
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
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
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