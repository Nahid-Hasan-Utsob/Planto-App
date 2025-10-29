// src/Router/Router.tsx
import { createBrowserRouter } from "react-router-dom";
import Main_Layout from "../Layout/Main_Layout";

// Pages
import Home from "../Pages/Home/Home_Main_layout";
import CartPage from "../Pages/Cart/CartPage";
import ProductDetailsPage from "../Pages/Cart/ProductDetailsPage";
import All_ProductList from "../Pages/Products/All_ProductList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main_Layout />,
    children: [
      {
        path: "/", // Home Page
        element: <Home />,
      },
      {
        path: "cart", // Cart Page
        element: <CartPage />,
      },
      {
        path: "product/:id", // Product Details
        element: <ProductDetailsPage />,
      },
      {
        path: "/shops", 
        element: <All_ProductList></All_ProductList>,
      },
    ],
  },
]);

export default router;