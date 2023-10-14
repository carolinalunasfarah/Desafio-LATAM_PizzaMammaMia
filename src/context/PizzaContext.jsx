import { createContext, useState } from "react";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);

    return (
        <PizzaContext.Provider value={[pizzas, setPizzas]}>
            {children}
        </PizzaContext.Provider>
    );
};

export default PizzaProvider;
