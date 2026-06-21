import React, { useEffect, useState } from "react";
import Cards from "../components/CategoriesCards";
import axios from "axios";

const Categories = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCategories() {
      setLoading(true);
      try {
        const response = await axios.get(
          " https://api.escuelajs.co/api/v1/categories",
        );
        setCategoriesData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCategories();
  }, []);

  return (
    <>
      <Cards categoriesData={categoriesData} isCateogrymsg={true} isLoading={loading}/>
    </>
  );
};

export default Categories;
