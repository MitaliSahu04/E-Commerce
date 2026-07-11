import { NavLink } from "react-router-dom";

const Navigation = () => {
  const navStyle = ({ isActive }) =>
    isActive
      ? "text-blue-600 border-b-2 border-blue-600 pb-1 font-semibold"
      : "text-gray-700 hover:text-blue-600 pb-1 border-b-2 border-transparent transition-all";

  return (
    <nav className="hidden md:flex items-center gap-6">
      <NavLink to="/" end className={navStyle}>
        Home
      </NavLink>

      <NavLink to="/products" className={navStyle}>
        Products
      </NavLink>

      <NavLink to="/about" className={navStyle}>
        About
      </NavLink>

      <NavLink to="/contact" className={navStyle}>
        Contact
      </NavLink>
    </nav>
  );
};

export default Navigation;