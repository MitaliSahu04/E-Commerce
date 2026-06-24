import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./Layout/Layout";
import Layout from "./Layout/Layout";
import Contact from "./pages/Contact";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Categories from "./Pages/Categories";
import About from "./Pages/About";
<<<<<<< HEAD
import CategoryPages from "./Pages/CategoryPage";
import ProductDetailPage from "./Pages/ProductDetailPage"
import PaymentPage from "./Pages/PaymentPage";
import ProfilePage from "./Pages/ProfilePage";
import Login from "./Pages/Login";
import Logout from "./Pages/Logout";
import EditProfilePage from "./Pages/EditProfilePage";
=======
// import ProductDetailPage from "./Pages/ProductDetailPage";
>>>>>>> main

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "contact",
        element: <Contact/>,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "about",
        element: <About />
      },
<<<<<<< HEAD
      {
        path: "categoriespage",
        element: <CategoryPages />
      },

      {
        path: "product/:productID",
        element: <ProductDetailPage />
      },

      {
        path: "paymentpage",
        element: <PaymentPage />
      },

      {
        path: "profilepage",
        element: <ProfilePage />
      },

      {
        path: "login",
        element: <Login />
      },

      {
        path: "logout",
        element: <Logout />
      },

      {
        path: "editprofilepage",
        element: <EditProfilePage />
      }
=======
      // {
      //   path: "product/:id",
      //   element: <ProductDetailPage />
      // }
>>>>>>> main
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  );
}

export default App;
