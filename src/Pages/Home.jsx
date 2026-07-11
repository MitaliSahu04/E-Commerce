import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import Cards from "../components/CategoriesCards";
import axios from "axios";
import { HomePageApi } from "../services/HomePageApi";

function Home() {
  const [categoriesData, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCategories() {
      setLoading(true);
      try {
        const response = await HomePageApi();
        setCategoriesData(response);
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
      image:
        "https://plus.unsplash.com/premium_photo-1664202526559-e21e9c0fb46a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge: "Fashion",
      badgeStyle: "bg-[#FF6B6B] text-white",
      title: "Latest Fashion Collection",
      subtitle: "Discover trendy outfits and accessories.",
      href: "/categoriespage/clothes",
      cta: "Shop now →",
      ctaStyle: "bg-[#FF6B6B] text-white hover:bg-[#e05555]",
    },
    {
      image:
        "https://images.unsplash.com/photo-1633202595695-8f9f6981e7ed?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge: "Electronics",
      badgeStyle: "bg-[#FF6B6B] text-white",
      title: "Premium Electronics",
      subtitle: "Upgrade your lifestyle with the latest gadgets.",
      href: "/categoriespage/electronics",
      cta: "Shop now →",
      ctaStyle: "bg-[#FF6B6B] text-white hover:bg-[#e05555]",
    },
    {
      image:"https://plus.unsplash.com/premium_photo-1670984222499-b566bf5cef69?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge: "Shoes",
      badgeStyle: "bg-[#FF6B6B] text-white",
      title: "Comfort Meets Style",
      subtitle: "Find the perfect pair for every occasion.",
      href: "/categoriespage/shoes",
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
