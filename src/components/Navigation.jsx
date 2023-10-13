import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
    const activeClass = ({ isActive }) => (isActive ? "active" : "inactive");
    // const navigate = useNavigate ();

    return (
        <Navbar className="navigation">
            <section className="navLinks">
                <NavLink className={activeClass} to="/">
                    Mamma Mia Pizza House!
                </NavLink>
                <NavLink className={activeClass} to="/cart">
                    Cart
                </NavLink>
            </section>
        </Navbar>
    );
};

export default Navigation;
