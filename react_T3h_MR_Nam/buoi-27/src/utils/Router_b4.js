import { createBrowserRouter } from "react-router-dom";
import HomePage_b4 from "../boostrap/HomePage_b4";

import ErrorPage from "../components/ErrorPage/ErrorPage";
import HomePage from "../components/HomePage/HomePage";

const router_b4 = createBrowserRouter([
  { path: "/", element: <HomePage_b4 />, errorElement: <ErrorPage /> },
//   { path: "/cart", element: <CartPage />, errorElement: <ErrorPage /> },
]);

export default router_b4;