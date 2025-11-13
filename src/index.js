import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import CartStore from "./reduxSetup/Store";
import { RouterProvider } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={CartStore}>
      {/* <RouterProvider> */}
      <App />
    </Provider>
  </StrictMode>
);
