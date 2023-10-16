import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const PizzaCard = () => {
    const [pizzas] = useContext(PizzaContext);
    const navigate = useNavigate();

    const seeDetails = () => {
        navigate(`/pizza/:id`);
    };

    return (
        <section className="pizzaGallery">
            {pizzas.map((pizza, p) => (
                <div key={p}>
                    <Card className="cardGallery">
                        <article>
                            <Card.Img src={pizza.img} alt={pizza.name} />
                        </article>
                        <section>
                            <Card.Body>
                                <Card.Title className="text-capitalize">
                                    {pizza.name}
                                    <hr />
                                </Card.Title>
                                <Card.Text>
                                    <strong>Ingredients</strong>
                                </Card.Text>
                                <Card.Text className="cardGalleryIng">
                                    {pizza.ingredients.map(
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
                                    <h2>$ {pizza.price}</h2>
                                </Card.Text>
                            </Card.Body>
                        </section>
                        <article className="cardButtons">
                            <button
                                className="btn btn-secondary"
                                onClick={seeDetails}>
                                Details
                            </button>
                            <button className="btn btn-warning">
                                Add to cart
                            </button>
                        </article>
                    </Card>
                </div>
            ))}
        </section>
    );
};

export default PizzaCard;
