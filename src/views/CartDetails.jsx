import { useContext, useEffect } from "react";
import { PizzaContext } from "../context/PizzaContext";

const CartDetails = () => {
    const { cart, setCart } = useContext(PizzaContext);

    const increment = (pizzaIndex) => {
        const updateCart = cart.map((pizza) => {
            if (pizza.id === pizzaIndex) {
                return { ...pizza, quantity: (pizza.quantity || 1) + 1 };
            }
            return pizza;
        });
        setCart(updateCart);
    };

    const decrement = (pizzaIndex) => {
        const updateCart = cart.map((pizza) => {
            if (pizza.id === pizzaIndex && pizza.quantity > 0) {
                return { ...pizza, quantity: pizza.quantity - 1 };
            }
            return pizza;
        });
        const filterCart = updateCart.filter(pizza => pizza.quantity > 0)
        setCart(filterCart);
    };

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
                        <button
                            className="cartButton reduce"
                            onClick={() => decrement(pizza.id)}>
                            -
                        </button>
                        <strong className="cartQ">{pizza.quantity || 1}</strong>
                        <button
                            className="cartButton add"
                            onClick={() => increment(pizza.id)}>
                            +
                        </button>
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
