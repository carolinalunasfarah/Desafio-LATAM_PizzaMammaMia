import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import PizzaProvider from "./context/PizzaContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <PizzaProvider>
                <App />
            </PizzaProvider>
        </BrowserRouter>
    </React.StrictMode>
);
