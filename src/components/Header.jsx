import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Menu,
  ShoppingCart,
  Heart,
  User,
  Search,
  LayoutDashboard,
  MapPin,
  Settings,
  KeyRound,
  LogOut,
} from "lucide-react";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const navStyle = ({ isActive }) =>
    isActive
      ? "text-blue-600 border-b-2 border-blue-600 pb-1 font-semibold"
      : "text-gray-700 hover:text-blue-600 pb-1 border-b-2 border-transparent transition-all";

  const HandleProfilePage = () => {
    setShowDropdown(false);
    navigate("/profilepage");
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold text-blue-600">
            ShopEase
          </NavLink>

          {/* Navigation */}
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

          {/* Search */}
          <div className="hidden lg:flex items-center border rounded-lg px-3 py-2 w-80">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search products..."
              className="outline-none ml-2 w-full"
            />
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-5">
            {/* My Account */}
            <div
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button
                onClick={() => setShowDropdown((prev) => !prev)}
                className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition"
              >
                <User className="w-6 h-6" />
                <p className="text-xs font-medium mt-1">My Account</p>
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50">
                  {/* User Info */}
                  <div className="px-4 py-4 bg-gray-50 border-b">
                    <h3 className="font-semibold text-gray-800">
                      Rohit Banot
                    </h3>
                    <p className="text-sm text-gray-500">
                      rohit@example.com
                    </p>
                  </div>

                  {/* Menu */}

                  <button
                    onClick={HandleProfilePage}
                    className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-100 transition"
                  >
                    <User size={18} />
                    Profile
                  </button>

                  <button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-100 transition">
                    <LayoutDashboard size={18} />
                    Dashboard
                  </button>

                  <button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-100 transition">
                    <MapPin size={18} />
                    Address
                  </button>

                  <button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-100 transition">
                    <Settings size={18} />
                    Settings
                  </button>

                  <button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-100 transition">
                    <KeyRound size={18} />
                    Change Password
                  </button>

                  <hr />

                  <button className="flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 transition">
                    <LogOut size={18} />
                    Sign Out
                  </button>
                </div>
              )}
            </div>

            {/* Wishlist */}
            <button className="flex flex-col items-center text-gray-700 hover:text-red-500 transition">
              <Heart className="w-6 h-6" />
              <p className="text-xs font-medium mt-1">Wishlist</p>
            </button>

            {/* Cart */}
            <button className="relative flex flex-col items-center text-gray-700 hover:text-green-600 transition">
              <div className="relative">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 flex items-center justify-center min-w-[18px] h-[18px] rounded-full bg-red-500 text-white text-[10px] font-semibold">
                  2
                </span>
              </div>
              <p className="text-xs font-medium mt-1">Cart</p>
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