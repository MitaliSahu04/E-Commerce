import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import Cards from "../components/CategoriesCards";
import axios from "axios";

function Home() {
  const [categoriesData, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCategories() {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/categories",
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

  const slides = [
    {
      image: "your-image-url",
      badge: "New Season",
      badgeStyle: "bg-[#FF6B6B] text-white",
      title: "Slide Title",
      subtitle: "Short description for this slide.",
      href: "/your-route",
      cta: "Shop now →",
      ctaStyle: "bg-[#FF6B6B] text-white hover:bg-[#e05555]",
    },
  ];
  return (
    <>
      <Carousel slides={slides} />
      <Cards
        categoriesData={categoriesData}
        isCateogrymsg={false}
        isLoading={loading}
      />
    </>
  );
}
export default Home;
