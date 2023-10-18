import { useContext, useEffect } from "react";
import { PizzaContext } from "../context/PizzaContext";

const CartDetails = () => {
    const { cart } = useContext(PizzaContext);

    useEffect(() => {}, [cart]);

    return (
        <section className="cart">
            <h3>Order Details</h3>
            {cart.map((pizza) => (
                <div key={pizza} className="cartDetails">
                    <article className="cartIN">
                        <img
                            className="cartDetailImg"
                            src={pizza.img}
                            alt={pizza.name}
                        />
                        <p>
                            <strong className="text-capitalize">
                                {pizza.name}
                            </strong>
                        </p>
                    </article>
                    <article className="cartTQ">
                        <h5>$ {pizza.price}</h5>
                        <button className="cartButton reduce">-</button>
                        <strong className="cartQ">2</strong>
                        <button className="cartButton add">+</button>
                    </article>
                </div>
            ))}
            <article>
                <button className="mt-5">Go to pay</button>
            </article>
        </section>
    );
};

export default CartDetails;
