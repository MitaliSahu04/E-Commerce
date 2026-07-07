import { Outlet } from "react-router-dom";
import { useEffect } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { getProfile } from "../api/profileApi";
import { useApp } from "../context/CreateUserContext";

const Layout = () => {
  const { setUser } = useApp();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) return;

      try {
        const response = await getProfile();

        setUser(response.data.data);
      } catch (error) {
        console.log(error.response);
        console.log(error.response?.status);
        console.log(error.response?.data);

        console.error("Profile Error:", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <>
      <Header />

      <main className="min-h-screen max-w-7xl mx-auto px-4 py-6">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
