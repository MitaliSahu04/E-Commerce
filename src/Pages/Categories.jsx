import React, { useEffect, useState } from "react";
import Cards from "../components/CategoriesCards";
import axios from 'axios';


const Categories = () => {
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get(
          " https://api.escuelajs.co/api/v1/categories",
        );
        setCategoriesData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCategories();
  }, []);

  return (
    <>
      <Cards  categoriesData={categoriesData} isCateogrymsg={true} />
    </>
  );
};

export default Categories;
