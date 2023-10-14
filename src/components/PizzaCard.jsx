import { useContext, useEffect } from "react";
import { PizzaContext } from "../context/PizzaContext";
import Card from "react-bootstrap/Card";

const PizzaCard = () => {
    const [pizzas, setPizzas] = useContext(PizzaContext);
    const urlData = "./src/pizzas.json";

    const getPizzas = async () => {
        try {
            const response = await fetch(urlData);
            if (!response.ok) {
                throw new Error("Data not found");
            }
            const data = await response.json();
            setPizzas(data);
            // console.log(data);
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        getPizzas();
    }, []);

    return (
        <section className="pizzaGallery">
            {pizzas.map((pizza, p) => (
                <div key={p}>
                    <Card className="card">
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
                                <Card.Text className="cardIngredients">
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
                        <article className="buttonsection">
                            <button className="btn btn-secondary">Details</button>
                            <button className="btn btn-warning">Add to cart</button>
                        </article>
                    </Card>
                </div>
            ))}
        </section>
    );
};

export default PizzaCard;
