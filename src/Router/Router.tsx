import { createBrowserRouter } from "react-router-dom";
import Main_Layout from "../Layout/Main_Layout";

// Pages
import Home from "../Pages/Home/Home_Main_layout";
import CartPage from "../Pages/Cart/CartPage";
import ProductDetailsPage from "../Pages/Cart/ProductDetailsPage";
import All_ProductList from "../Pages/Products/All_ProductList";
import LoginPage from "../Pages/Login/LoginPage"; // নতুন

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main_Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "cart", element: <CartPage /> },
      { path: "product/:id", element: <ProductDetailsPage /> },
      { path: "/shops", element: <All_ProductList /> },
      { path: "/login", element: <LoginPage /> }, // লগইন পেজ
    ],
  },
]);

export default router;