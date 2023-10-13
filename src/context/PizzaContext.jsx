import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const PizzaContext = createContext();

const urlPizzas = "./pizzas.json";

const PizzaProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);
    const getPizzas = async () => {
        try {
            const response = await axios.get(urlPizzas);
            if (!response.status) {
                throw new Error("Data not found");
            }
            setPizzas(response);
            console.log(response)
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        getPizzas();
    }, []);

    return (
        <PizzaContext.Provider value={{ pizzas, setPizzas }}>
            {children}
        </PizzaContext.Provider>
    );
};

export default PizzaProvider;
