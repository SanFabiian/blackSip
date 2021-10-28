import React from "react";

const Product = ({product}) => {
    return (
        <div className="Product">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <h3>{product.price}</h3>
            <button type='button'>Agregar al carrito</button>
        </div>
    )
}

export default Product