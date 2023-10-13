import { Route, Routes } from "react-router-dom";
import "./App.css";

import Navigation from "./components/Navigation";
import Home from "./views/Home";
import CartDetails from "./views/CartDetails";

const App = () => {
    return (
        <>
            <div>
                <Navigation />

                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path ="/pizza/:id" element = {<PizzaDetails/>}/> */}
                    <Route path="/cart" element={<CartDetails />} />
                    {/* <Route path="/*" element={<NotFound />} /> */}
                </Routes>
            </div>
        </>
    );
};

export default App;
