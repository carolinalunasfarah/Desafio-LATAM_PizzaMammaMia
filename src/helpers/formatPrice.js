const formatPrice = (price) => {
    return price.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
    });
};

export default formatPrice;