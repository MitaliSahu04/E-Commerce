import {
  User,
  LayoutDashboard,
  MapPin,
  Settings,
  KeyRound,
  LogOut,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../utils/logout";
import LogoutModal from "./LogoutModal";
import { useApp } from "../context/CreateUserContext";

const MyAccountDropdown = ({
  showDropdown,
  HandleProfilePage,
  HandleDashboard,
  HandleAddress,
  HandleSetting,
  HandleChangePassword,
}) => {
  const { user } = useApp();
  const [openLogout, setOpenLogout] = useState(false);
  const navigate = useNavigate();
  if (!showDropdown) return null;

  return (
    <div className="absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50">
      <div className="px-4 py-4 bg-gray-50 border-b">
        <h3 className="font-semibold text-gray-800">
          {user?.firstName} {user?.lastName}
        </h3>
        <p className="text-sm text-gray-500">{user?.email}</p>
      </div>

      <button
        onClick={HandleProfilePage}
        className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-100 transition"
      >
        <User size={18} />
        Profile
      </button>

      <button
        onClick={HandleDashboard}
        className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-100 transition"
      >
        <LayoutDashboard size={18} />
        Dashboard
      </button>

      <button
        onClick={HandleAddress}
        className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-100 transition"
      >
        <MapPin size={18} />
        Address
      </button>

      <button
        onClick={HandleSetting}
        className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-100 transition"
      >
        <Settings size={18} />
        Settings
      </button>

      <button
        onClick={HandleChangePassword}
        className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-100 transition"
      >
        <KeyRound size={18} />
        Change Password
      </button>

      <hr />

      <button
        onClick={() => setOpenLogout(true)}
        className="flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 transition"
      >
        <LogOut size={18} />
        Sign Out
      </button>
      <LogoutModal
        isOpen={openLogout}
        onClose={() => setOpenLogout(false)}
        onConfirm={() => {
          setOpenLogout(false);
          logout(navigate);
        }}
      />
    </div>
  );
};

export default MyAccountDropdown;
