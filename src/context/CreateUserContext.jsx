import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    setCartCount((prev) => prev + 1);
  };

  return (
    <UserContext.Provider value={{
      user,
      setUser,
      cartCount,
      cartItems,
      addToCart,
      search,
      setSearch,
      debouncedSearch,
      setDebouncedSearch
    }}>

      {children}

    </UserContext.Provider>
  );
}