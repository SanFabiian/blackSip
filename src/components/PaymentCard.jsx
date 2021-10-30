import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import formatCurrency from "../utils/formatCurrency";
import ProductPayment from "../components/ProductPayment";

import "../styles/components/PaymentCard.styl";

const PaymentCard = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;
  const sumTotal = () => {
    if (cart != undefined) {
      const reducer = (preVal, currVal) => preVal + parseInt(currVal.price);
      const sum = cart.reduce(reducer, 0);
      return formatCurrency(sum, "COL");
    }
  };
  return (
    <article className="PaymentCard">
      <div className="Payment-list-head">Resumen de orden</div>
      <div className="Payment-list-body">
        {cart != undefined && cart.length > 0 ? (
          <div>
            {cart.map((item) => (
              <ProductPayment key={item.name} product={item} />
            ))}
          </div>
        ) : (
          <p>No hay propuestos agregados</p>
        )}
      </div>
      <div className="Payment-list-footer">
        <div className="Payment-subtotal">
          <p>
            <span>Subtotal</span> <b>Total {sumTotal()}</b>
          </p>
          <p>
            <span>Envio</span> <b>A calcular</b>
          </p>
        </div>
        <div className="Payment-total">
          <span>Total</span>
          <b>{sumTotal()}</b>
        </div>
      </div>
    </article>
  );
};

export default PaymentCard;
