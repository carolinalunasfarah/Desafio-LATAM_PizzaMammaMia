import PizzaCard from "../components/PizzaCard";

const Home = () => {
    return (
        <>
            <header>
                <h1>Mamma Mia Pizza House!</h1>
                <h3>Best pizzas in town!</h3>
            </header>
            <main>
                <PizzaCard />
            </main>
            <footer>
                <h6>Pizza Mamma Mia, all rights reserved © 2023</h6>
            </footer>
        </>
    );
};

export default Home;
