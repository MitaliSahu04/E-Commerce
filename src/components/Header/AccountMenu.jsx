import { User } from "lucide-react";
import MyAccountDropdown from "../MyAccountDropdown";

const AccountMenu = ({
  dropdownRef,
  showDropdown,
  setShowDropdown,
  HandleProfilePage,
  HandleDashboard,
  HandleAddress,
  HandleSetting,
  HandleChangePassword,
}) => {
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setShowDropdown((prev) => !prev)}
        className="flex flex-col items-center text-gray-700 hover:text-blue-600"
      >
        <User className="w-6 h-6" />
        <p className="text-xs mt-1">My Account</p>
      </button>

      <MyAccountDropdown
        showDropdown={showDropdown}
        HandleProfilePage={HandleProfilePage}
        HandleDashboard={HandleDashboard}
        HandleAddress={HandleAddress}
        HandleSetting={HandleSetting}
        HandleChangePassword={HandleChangePassword}
      />
    </div>
  );
};

export default AccountMenu;