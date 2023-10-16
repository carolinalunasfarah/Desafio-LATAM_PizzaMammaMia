import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const PizzaCard = () => {
    const { pizzas } = useContext(PizzaContext);
    const navigate = useNavigate();

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
                                <Card.Text className="text-capitalize cardGalleryTitle">
                                    {pizza.name}
                                </Card.Text>
                                <hr />
                                <Card.Text>
                                    <strong className="cardGalleryIngTitle">
                                        Ingredients
                                    </strong>
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
                                    <span className="cardGalleryPrice">
                                        $ {pizza.price}
                                    </span>
                                </Card.Text>
                            </Card.Body>
                        </section>
                        <article className="cardButtons">
                            <button
                                to={`pizza/${pizza.id}`}
                                className="btn btn-secondary"
                                onClick={() => navigate(`pizza/${pizza.id}`)}>
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
