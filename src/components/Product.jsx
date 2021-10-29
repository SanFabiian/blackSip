import React from "react";

import "../styles/components/Product.styl";

const Product = ({ product, addItemToCart }) => {
  return (
    <div className="Product">
      <img className="Product-img" src={product.image} alt={product.name} />
      <h2 className="Product-name">{product.name}</h2>
      <h3 className="Product-price">{product.price}</h3>
      <button
        type="button"
        className="btn btn-primary"
        onClick={addItemToCart(product)}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default Product;
