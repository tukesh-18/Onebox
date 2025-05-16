import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Login from  "./Login/Login.jsx";
import "./index.css";
import store from "./app/store.jsx";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
