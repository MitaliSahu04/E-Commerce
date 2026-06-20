// MainLayout.jsx

import { Outlet } from "react-router-dom";
import Header from "./../components/Header";
import Footer from "./../components/Footer";

const Layout = () => {
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
