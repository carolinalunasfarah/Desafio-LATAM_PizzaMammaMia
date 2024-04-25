import { useNavigate } from "react-router-dom";
import pizzaNotFound from "/assets/img/pizzaNotFound.png";

export const NotFound = () => {
    const navigate = useNavigate();
    const backHome = () => {
        navigate(`/`);
    };

    return (
        <section className="notFound">
            <h4>The page you are looking for doesn't exist</h4>
            <img
                className="notFoundImg"
                src={pizzaNotFound}
                alt="Sad Pikachu gif"
            />
            <button className="btn btn-warning" onClick={backHome}>
                <strong>Let's take you back to home page</strong>
            </button>
        </section>
    );
};

export default NotFound;
