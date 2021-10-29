import React, { useContext } from "react";
import AppContext from "../context/AppContext";

import Product from "./Product";

import "../styles/components/Products.styl";

const Products = () => {
  const { addToCart, products } = useContext(AppContext);

  const addItemToCart = (product) => () => {
    addToCart(product);
  };
  return (
    <section className="Products">
      {products.map((item) => (
        <Product key={item.name} product={item} addItemToCart={addItemToCart} />
      ))}
    </section>
  );
};

export default Products;
