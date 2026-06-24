import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout/Layout";
import About from "./Pages/About";
import Categories from "./Pages/Categories";
import CategoryPdp from "./Pages/CategoryPdp";
import Contact from "./pages/Contact";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Categories from "./Pages/Categories";
import About from "./Pages/About";
// import ProductDetailPage from "./Pages/ProductDetailPage";
import CategoryData from "./Pages/CategoryData";

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
