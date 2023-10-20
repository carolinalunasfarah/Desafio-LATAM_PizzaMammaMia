import PizzaCard from "../components/PizzaCard";

const Home = () => {
    return (
        <>
            <header>
                <h1>Mamma Mia Pizza House!</h1>
                <h4>Best pizzas in town!</h4>
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
