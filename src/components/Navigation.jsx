import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
    const activeClass = ({ isActive }) => (isActive ? "active" : "inactive");

    return (
        <Navbar className="navigation fixed-top">
            <section className="navLinks">
                <NavLink className={activeClass} to="/"> 🍕 Mamma Mia Pizza House!
                </NavLink>
                <NavLink className={activeClass} to="/cart">🛒 Cart
                </NavLink>
            </section>
        </Navbar>
    );
};

export default Navigation;
