import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import formatPrice from '../helpers/formatPrice.js';

const PizzaCard = () => {
    const { pizzas, addToCart } = useContext(PizzaContext);
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
                                                🍕 {ingredient}
                                            </li>
                                        )
                                    )}
                                </Card.Text>
                                <hr />
                                <Card.Text>
                                    <span className="cardGalleryPrice">
                                        {formatPrice(pizza.price)}
                                    </span>
                                </Card.Text>
                            </Card.Body>
                        </section>
                        <article className="cardButtons">
                            <button
                                to={`pizza/${pizza.id}`}
                                className="cardButton details"
                                onClick={() => navigate(`pizza/${pizza.id}`)}>
                                Details
                            </button>
                            <button
                                className="cardButton add"
                                onClick={() => addToCart(pizza)}>
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
