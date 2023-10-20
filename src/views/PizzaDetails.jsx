import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";
import formatPrice from "../helpers/formatPrice.js";

const PizzaDetails = () => {
    const { id } = useParams();
    const { pizzas, addToCart } = useContext(PizzaContext);
    const [selectedPizza, setSelectedPizza] = useState([]);
    const navigate = useNavigate();

    const getPizza = () => {
        const pizzaDetail = pizzas.find((pizza) => pizza.id === id);
        setSelectedPizza(pizzaDetail);
        if (!pizzaDetail) {
            navigate("/*");
        }
        // console.log(selectedPizza);
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
                        <section className="cardDetailsIng">
                            {selectedPizza.ingredients &&
                                selectedPizza.ingredients.map(
                                    (ingredient, index) => (
                                        <li
                                            key={index}
                                            className="text-capitalize">
                                            🍕 {ingredient}
                                        </li>
                                    )
                                )}
                        </section>
                        <article className="cardDetailFooter">
                            <h4>Price: {formatPrice(selectedPizza.price)}</h4>
                            <button
                                className="cardButton addDetail"
                                onClick={() => addToCart(selectedPizza)}>
                                Add to cart
                            </button>
                            <button
                                className="cardButton backHome"
                                onClick={() => navigate(`/`)}>
                                Back Home
                            </button>
                        </article>
                    </section>
                </div>
            )}
        </section>
    );
};

export default PizzaDetails;
