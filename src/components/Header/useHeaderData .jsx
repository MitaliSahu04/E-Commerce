import axios from "axios";
import { useEffect, useState } from "react";

const useHeaderData = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [catRes, productRes] = await Promise.all([
          axios.get("https://api.escuelajs.co/api/v1/categories"),
          axios.get("https://api.escuelajs.co/api/v1/products"),
        ]);

        setCategories(catRes.data);
        setProducts(productRes.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  return {
    categories,
    products,
  };
};

export default useHeaderData;