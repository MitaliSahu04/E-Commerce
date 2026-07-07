// src/context/AppContext.jsx

import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export default function AppProvider({ children }) {
  // User
  const [user, setUser] = useState(null);

  // Cart
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  // Search
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    setCartCount((prev) => prev + 1);
  };

  return (
    <AppContext.Provider
      value={{
        // User
        user,
        setUser,

        // Cart
        cartItems,
        cartCount,
        addToCart,

        // Search
        search,
        setSearch,
        debouncedSearch,
        setDebouncedSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}