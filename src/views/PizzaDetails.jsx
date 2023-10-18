import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";
import { toast } from "react-toastify";

const PizzaDetails = () => {
    const { id } = useParams();
    const { pizzas, cart, setCart } = useContext(PizzaContext);
    const [selectedPizza, setSelectedPizza] = useState([]);

    const getPizza = () => {
        const pizzaDetail = pizzas.find((pizza) => pizza.id === id);
        setSelectedPizza(pizzaDetail);
        // console.log(selectedPizza);
    };

    const addToCart = (pizza) => {
        const pizzaInCart = cart.find((item) => item.id === pizza.id);
        if (pizzaInCart) {
            pizzaInCart.quantity = (pizzaInCart.quantity || 1) + 1;
            setCart([...cart]);
        } else {
            setCart([...cart, { ...pizza, quantity: 1 }]);
        }
        toast.success("🍕 Pizza added to cart", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
        });
    };

    useEffect(() => {
        getPizza();
    }, []);

    return (
        <section className="pizzaDetail text-start">
            {selectedPizza && (
                <div className="cardDetail">
                    <img
                        className="cardDetailImg"
                        src={selectedPizza.img}
                        alt={selectedPizza.name}
                    />
                    <section className="cardDetails">
                        <h2 className="text-capitalize">
                            {selectedPizza.name}
                            <hr />
                        </h2>
                        <p>{selectedPizza.desc}</p>
                        <h4>Ingredients</h4>
                        <section className="cardDetailIng">
                            {selectedPizza.ingredients.map(
                                (ingredient, index) => (
                                    <li key={index} className="text-capitalize">
                                        {ingredient}
                                    </li>
                                )
                            )}
                        </section>
                        <article className="cardDetailFooter">
                            <h4>
                                <span>Price: $ {selectedPizza.price}</span>
                            </h4>
                            <article>
                                <button
                                    className="btn btn-warning"
                                    onClick={() => addToCart(selectedPizza)}>
                                    Add to cart
                                </button>
                            </article>
                        </article>
                    </section>
                </div>
            )}
        </section>
    );
};

export default PizzaDetails;
