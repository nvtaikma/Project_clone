import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// import routerName from "./utils/Router";
import { Provider } from "react-redux";
import { store } from "./store";
import router_b4 from "./utils/Router_b4";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <RouterProvider router={routerName} /> */}
    <RouterProvider router={router_b4} />
  </Provider>
);
