import { Menu } from "lucide-react";

const MobileMenu = () => {
  return (
    <button className="md:hidden">
      <Menu />
    </button>
  );
};

export default MobileMenu;