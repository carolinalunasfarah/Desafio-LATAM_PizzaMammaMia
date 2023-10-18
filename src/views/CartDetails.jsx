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
        const filterCart = updateCart.filter((pizza) => pizza.quantity > 0);
        setCart(filterCart);
    };

    const totalPrice = cart.reduce ((total, pizza) => total + pizza.quantity * pizza.price, 0);
    const formatTotalPrice = totalPrice.toLocaleString("es-CL");

    const formatPrice = (price) => {
        return price.toLocaleString('es-CL', {
          style: 'currency',
          currency: 'CLP'
        });
      };

    useEffect(() => {}, [cart]);

    return (
        <section className="cart">
            <h3>Order Details</h3>
            {cart.map((pizza, p) => (
                <div key={p} className="cartDetails">
                    <article className="cartImgName">
                        <img
                            className="cartImg"
                            src={pizza.img}
                            alt={pizza.name}
                        />
                        <p>
                            <strong className="text-capitalize">
                                {pizza.name}
                            </strong>
                        </p>
                    </article>
                    <article className="cartPriceQuantity">
                        <h5>{formatPrice (pizza.price * (pizza.quantity || 1))}</h5>
                        <button
                            className="cartButton decrement"
                            onClick={() => decrement(pizza.id)}>
                            -
                        </button>
                        <h5>{pizza.quantity || 1}</h5>
                        <button
                            className="cartButton increment"
                            onClick={() => increment(pizza.id)}>
                            +
                        </button>
                    </article>
                </div>
            ))}
            <article className="cartTotalPrice">
                <h4>Total: <span>${formatTotalPrice}</span></h4>
                <button className="payButton">Go to pay</button>
            </article>
        </section>
    );
};

export default CartDetails;
