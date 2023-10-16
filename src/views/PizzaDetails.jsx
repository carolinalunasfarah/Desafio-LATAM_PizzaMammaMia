import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";
import Card from "react-bootstrap/Card";

const PizzaDetails = () => {
    const { id } = useParams();
    const { pizzas } = useContext(PizzaContext);
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
        <section className="pizzaGallery">
            <Card className="cardGallery">
                <article>
                    <Card.Img
                        src={selectedPizza.img}
                        alt={selectedPizza.name}
                    />
                </article>
                <section>
                    <Card.Body>
                        <Card.Title className="text-capitalize">
                            {selectedPizza.name}
                            <hr />
                        </Card.Title>
                        <Card.Text>{selectedPizza.desc}</Card.Text>
                        <Card.Text>
                            <strong>Ingredients</strong>
                        </Card.Text>
                        <Card.Text className="cardGalleryIng">
                            {selectedPizza.ingredients.map(
                                    (ingredient, index) => (
                                        <li
                                            key={index}
                                            className="text-capitalize">
                                            {ingredient}
                                        </li>
                                    )
                                )}
                        </Card.Text>
                        <hr />
                        <Card.Text>
                            <span>$ {selectedPizza.price}</span>
                        </Card.Text>
                    </Card.Body>
                </section>
                <article className="cardButtons">
                    <button className="btn btn-warning">Add to cart</button>
                </article>
            </Card>
        </section>
    );
};

export default PizzaDetails;
