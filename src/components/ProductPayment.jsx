import React from "react";

import formatCurrency from "../utils/formatCurrency";
import "../styles/components/ProductPayment.styl";

const ProductPayment = ({ product }) => {
  return (
    <div className="ProductPayment">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <h3>{formatCurrency(parseInt(product.price), "COL")}</h3>
    </div>
  );
};

export default ProductPayment;
