import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout/Layout";
import About from "./Pages/About";
import Categories from "./Pages/Categories";
import CategoryPdp from "./Pages/CategoryPdp";
import Contact from "./pages/Contact";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import CategoryData from "./Pages/CategoryData";
import PaymentPage from "./Pages/PaymentPage";
import ProfilePage from "./Pages/ProfilePage";
import Login from "./Pages/Login";
import Logout from "./Pages/Logout";
import EditProfilePage from "./Pages/EditProfilePage";

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
        path: "/products",
        element: <Products />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/categoriespage/:slug",
        element: <CategoryPdp />,
      },
      {
        path: "/categoriespage/:slug/:id",
        element: <CategoryData />,
      },
       {
        path: "product/:productID",
        element: <ProductDetailsPage />
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
