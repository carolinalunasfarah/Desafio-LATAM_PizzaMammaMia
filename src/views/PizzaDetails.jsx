import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";

const PizzaDetails = () => {
    const { id } = useParams();
    const { pizzas, addToCart } = useContext(PizzaContext);
    const [selectedPizza, setSelectedPizza] = useState([]);

    const getPizza = () => {
        const pizzaDetail = pizzas.find((pizza) => pizza.id === id);
        setSelectedPizza(pizzaDetail);
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
                                <span>Price: ${selectedPizza.price.toLocaleString("es-CL")}</span>
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
