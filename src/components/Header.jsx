import React, { useState, useRef, useEffect, useContext } from "react";
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
import { UserContext } from "../context/CreateUserContext";
import axios from "axios";

const Header = () => {
  const { user } = useContext(UserContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLogin, setlogin] = useState(user);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const [showCategories, setShowCategories] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const navStyle = ({ isActive }) =>
    isActive
      ? "text-blue-600 border-b-2 border-blue-600 pb-1 font-semibold"
      : "text-gray-700 hover:text-blue-600 pb-1 border-b-2 border-transparent transition-all";

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const HandleProfilePage = () => {
    setShowDropdown(false);
    navigate("/profilepage");
  };
  const HandleDashboard = () => {
    setShowDropdown(false);
    navigate("/dashboard");
  };
  const HandleAddress = () => {
    setShowDropdown(false);
    navigate("/addresspage");
  };
  const HandleSetting = () => {
    setShowDropdown(false);
    navigate("/settingpage");
  };
  const HandleChangePassword = () => {
    setShowDropdown(false);
    navigate("/changepasswordpage");
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const [catRes, productRes] = await Promise.all([
          axios.get("https://api.escuelajs.co/api/v1/categories"),
          axios.get("https://api.escuelajs.co/api/v1/products"),
        ]);
        setCategories(catRes.data);
        setProducts(productRes.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const getProductType = (title) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes("t-shirt")) return "T-Shirts";
    if (lowerTitle.includes("shirt")) return "Shirts";
    if (lowerTitle.includes("hoodie")) return "Hoodies";
    if (lowerTitle.includes("sweatshirt")) return "Sweatshirts";
    if (lowerTitle.includes("jogger")) return "Joggers";
    if (lowerTitle.includes("short")) return "Shorts";
    if (lowerTitle.includes("cap")) return "Caps";
    if (lowerTitle.includes("headphone")) return "Headphones";
    if (lowerTitle.includes("mouse")) return "Mouse";
    if (lowerTitle.includes("laptop")) return "Laptops";
    if (lowerTitle.includes("controller")) return "Gaming Controllers";
    if (lowerTitle.includes("phone case")) return "Phone Cases";
    if (lowerTitle.includes("smartwatch")) return "Smartwatches";
    if (lowerTitle.includes("sofa")) return "Sofas";
    if (lowerTitle.includes("chair")) return "Chairs";
    if (lowerTitle.includes("table")) return "Tables";
    if (lowerTitle.includes("sneaker")) return "Sneakers";
    if (lowerTitle.includes("shoe")) return "Shoes";
    if (lowerTitle.includes("heel")) return "Heels";
    if (lowerTitle.includes("boot")) return "Boots";
    if (lowerTitle.includes("sandal")) return "Sandals";
    return "Others";
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 relative">
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

            <div
              onMouseEnter={() => setShowCategories(true)}
              onMouseLeave={() => setShowCategories(false)}
            >
              <NavLink to="/categories" className={navStyle}>
                Categories
              </NavLink>
            </div>

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
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowDropdown((prev) => !prev)}
                className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition"
              >
                <User className="w-6 h-6" />
                <p className="text-xs font-medium mt-1">My Account</p>
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50">
                  <div className="px-4 py-4 bg-gray-50 border-b">
                    <h3 className="font-semibold text-gray-800">
                      {localStorage.getItem("Name")}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {localStorage.getItem("Email")}
                    </p>
                  </div>

                  <button
                    onClick={HandleProfilePage}
                    className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-100 transition"
                  >
                    <User size={18} /> Profile
                  </button>
                  <button
                    onClick={HandleDashboard}
                    className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-100 transition"
                  >
                    <LayoutDashboard size={18} /> Dashboard
                  </button>
                  <button
                    onClick={HandleAddress}
                    className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-100 transition"
                  >
                    <MapPin size={18} /> Address
                  </button>
                  <button
                    onClick={HandleSetting}
                    className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-100 transition"
                  >
                    <Settings size={18} /> Settings
                  </button>
                  <button
                    onClick={HandleChangePassword}
                    className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-100 transition"
                  >
                    <KeyRound size={18} /> Change Password
                  </button>

                  <hr />

                  <button className="flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 transition">
                    <LogOut size={18} /> Sign Out
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

        {showCategories && (
          <div
            onMouseEnter={() => setShowCategories(true)}
            onMouseLeave={() => setShowCategories(false)}
            className="absolute left-1/2 -translate-x-1/2 top-full w-full bg-white rounded-xl shadow-2xl border border-gray-200 p-8 z-50"
          >
            <div className="grid grid-cols-5 gap-2">
              {categories.map((category) => {
                const categoryProducts = products.filter(
                  (product) => product.category.id === category.id,
                );
                const productTypes = [
                  ...new Set(
                    categoryProducts.map((product) =>
                      getProductType(product.title),
                    ),
                  ),
                ];
                return (
                  <div key={category.id}>
                    <h2 className="font-bold text-gray-900 uppercase border-b pb-1 mb-3">
                      {category.name}
                    </h2>
                    <div className="space-y-2">
                      {productTypes.map((type) => (
                        <button
                          key={type}
                          className="block text-left text-sm text-gray-600 hover:text-blue-600 transition"
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
