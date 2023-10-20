import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";

const Navigation = () => {
    const activeClass = ({ isActive }) => (isActive ? "active" : "inactive");
    const {cart} = useContext(PizzaContext);

    const totalPrice = cart.reduce ((total, pizza) => total + pizza.quantity * pizza.price, 0);
    const formatTotalPrice = totalPrice.toLocaleString("es-CL");

    return (
        <Navbar className="navigation">
            <section className="navLinks">
                <NavLink className={activeClass} to="/"> 🍕 Mamma Mia Pizza House!
                </NavLink>
                <NavLink className={activeClass} to="/cart">🛒 Cart: ${formatTotalPrice}
                </NavLink>
            </section>
        </Navbar>
    );
};

export default Navigation;
