import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartSlider from "../components/CartSlider";
import Logo from "./Header/Logo";
import Navigation from "./Header/Navigation";
import SearchBar from "./Header/SearchBar";
import HeaderActions from "./Header/HeaderActions";
import useHeaderData from "./Header/useHeaderData ";

const Header = () => {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const [showDropdown, setShowDropdown] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const { categories, products } = useHeaderData();

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

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          <Logo />

          <Navigation />

          <SearchBar />

          <HeaderActions
            dropdownRef={dropdownRef}
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
            showCart={showCart}
            setShowCart={setShowCart}
            isWishlistOpen={isWishlistOpen}
            setIsWishlistOpen={setIsWishlistOpen}
            HandleProfilePage={HandleProfilePage}
            HandleDashboard={HandleDashboard}
            HandleAddress={HandleAddress}
            HandleSetting={HandleSetting}
            HandleChangePassword={HandleChangePassword}
          />

          <CartSlider
            showCart={showCart}
            setShowCart={setShowCart}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;