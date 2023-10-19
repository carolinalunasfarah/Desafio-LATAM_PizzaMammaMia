import { Route, Routes } from "react-router-dom";
import "./App.css";
import 'react-tooltip/dist/react-tooltip.css'

import Navigation from "./components/Navigation";
import Home from "./views/Home";
import CartDetails from "./views/CartDetails";
import PizzaDetails from "./views/PizzaDetails";
import NotFound from "./views/NotFound";

import { ToastContainer } from "react-toastify";

const App = () => {
    return (
        <>
            <div>
                <Navigation />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pizza/:id" element={<PizzaDetails />} />
                    <Route path="/cart" element={<CartDetails />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
                <ToastContainer />
            </div>
        </>
    );
};

export default App;
