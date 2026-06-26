import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (product) => {
  setCartItems((prev) => [...prev, product]);
  setCartCount((prev) => prev + 1);
};

  return (
    <UserContext.Provider value={{ user, setUser, cartCount,cartItems, addToCart }}>
      {children}
    </UserContext.Provider>
  );
}