import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./Layout/Layout";
import Layout from "./Layout/Layout";
import Contact from "./pages/Contact";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Categories from "./Pages/Categories";
import About from "./Pages/About";
import CategoryPages from "./Pages/CategoryPage";

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
      {
        path: "categoriespage",
        element: <CategoryPages />
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
