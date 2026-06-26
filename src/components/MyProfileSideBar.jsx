import { useNavigate, useLocation } from "react-router-dom";
import {
  User,
  LayoutDashboard,
  MapPin,
  Settings,
  KeyRound,
  LogOut,
} from "lucide-react";

const MyProfileSideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentKey = location.pathname.replace("/", "");

  const btnStyle = (key) =>
    `flex items-center gap-3 w-full px-4 py-3 text-sm transition
    ${currentKey === key
      ? "bg-blue-50 text-blue-600 font-semibold border-r-2 border-blue-600"
      : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
    }`;

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200 flex flex-col">

      {/* User Info */}
      <div className="px-4 py-4 bg-gray-50 border-b border-gray-200">
        <h3 className="font-semibold text-gray-800">
          {localStorage.getItem("Name") || "User"}
        </h3>
        <p className="text-sm text-gray-500">
          {localStorage.getItem("Email") || "user@example.com"}
        </p>
      </div>

      {/* Nav Items */}
      <nav className="flex flex-col py-2 flex-1">
        <button onClick={() => navigate("/profilepage")} className={btnStyle("profilepage")}>
          <User size={18} /> Profile
        </button>

        <button onClick={() => navigate("/dashboard")} className={btnStyle("dashboard")}>
          <LayoutDashboard size={18} /> Dashboard
        </button>

        <button onClick={() => navigate("/addresspage")} className={btnStyle("addresspage")}>
          <MapPin size={18} /> Address
        </button>

        <button onClick={() => navigate("/settingpage")} className={btnStyle("settingpage")}>
          <Settings size={18} /> Settings
        </button>

        <button onClick={() => navigate("/changepasswordpage")} className={btnStyle("changepasswordpage")}>
          <KeyRound size={18} /> Change Password
        </button>
      </nav>

      {/* Sign Out */}
      <div className="border-t border-gray-200">
        <button
          onClick={() => { localStorage.clear(); navigate("/login"); }}
          className="flex items-center gap-3 w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition"
        >
          <LogOut size={18} /> Sign Out
        </button>
      </div>

    </aside>
  );
};

export default MyProfileSideBar;