import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { CartProvider } from "./contexts/cartContext";
import { BrowserRouter } from "react-router-dom";

import App from "./views/App";
// import App from "./views/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <CartProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </CartProvider>
  </BrowserRouter>
);
reportWebVitals();
