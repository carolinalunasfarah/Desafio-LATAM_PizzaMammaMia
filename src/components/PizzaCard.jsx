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
        <section>
            {pizzas.map((pizza, p) => (
                <div key={p}>
                    <Card className="card">
                        <article>
                            <Card.Img src={pizza.img} alt={pizza.name} />
                        </article>
                        <article>
                            <Card.Body>
                                <Card.Title className="text-capitalize">
                                    {pizza.name}
                                </Card.Title>
                                <Card.Text>
                                    <strong>Ingredients</strong>
                                </Card.Text>
                                <Card.Text>
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
                                <Card.Text>
                                    <h2>$ {pizza.price}</h2>
                                </Card.Text>
                            </Card.Body>
                        </article>
                    </Card>
                </div>
            ))}
        </section>
    );
};

export default PizzaCard;
