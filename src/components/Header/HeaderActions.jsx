import AccountMenu from "./AccountMenu";
import Wishlist from "./Wishlist";
import CartButton from "./CartButton";
import MobileMenu from "./MobileMenu";

const HeaderActions = (props) => {
  return (
    <div className="flex items-center gap-5">
      <AccountMenu {...props} />

      <Wishlist
        isWishlistOpen={props.isWishlistOpen}
        setIsWishlistOpen={props.setIsWishlistOpen}
      />

      <CartButton setShowCart={props.setShowCart} />

      <MobileMenu />
    </div>
  );
};

export default HeaderActions;