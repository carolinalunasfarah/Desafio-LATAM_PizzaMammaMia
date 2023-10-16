import { createContext, useState, useEffect } from "react";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);

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
        <PizzaContext.Provider
            value={{pizzas, setPizzas}}>
            {children}
        </PizzaContext.Provider>
    );
};

export default PizzaProvider;
