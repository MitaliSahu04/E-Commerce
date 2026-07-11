import React, { useEffect, useState } from "react";
import Cards from "../components/CategoriesCards";
import axios from "axios";
import { CategoryListNameData } from "../services/filterapi";

const Categories = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCategories() {
      setLoading(true);
      try {
        const response = await CategoryListNameData();
        setCategoriesData(response);
        console.log(response);
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
      <Cards
        categoriesData={categoriesData}
        isCateogrymsg={true}
        isLoading={loading}
      />
    </>
  );
};

export default Categories;
