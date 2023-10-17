import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";

const CartDetails = () => {
    // const [cart, setCart] = useContext(PizzaContext);

    return (
        <section className="cartDetails">
            <h3>Order Details</h3>
            <article>
                <img src="" alt="" />
                <p>
                    <strong>Pizza name</strong>
                </p>
                <span>Price</span>
                <button>-</button>
                <button>+</button>
            </article>
            <article>
                <h3>Total $</h3>
            </article>
            <article>
                <button>Go to pay</button>
            </article>
        </section>
    );
};

export default CartDetails;
