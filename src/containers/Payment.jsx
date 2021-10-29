import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Product from "../components/ProductPayment";

import formatCurrency from "../utils/formatCurrency";

import "../styles/components/MainPayment.styl";
import "../styles/components/PaymentCard.styl";
import "../styles/components/Form.styl";
import ProductPayment from "../components/ProductPayment";

const Payment = () => {
  const { state, products } = useContext(AppContext);
  const { cart } = state;
  console.log(cart);

  const sumTotal = () => {
    if (cart != undefined) {
      const reducer = (preVal, currVal) => preVal + parseInt(currVal.price);
      const sum = cart.reduce(reducer, 0);
      return formatCurrency(sum, "COL");
    }
  };

  return (
    <section className="Main Main-payment wrapper">
      <article className="Form-address">
        <div className="Form-address-head">
          <h2>Dirección de envio</h2>
        </div>
        <form action="" className="Form-address-body">
          <div className="Form-item">
            <label htmlFor="Name">
              <i className="fas fa-user"></i>
            </label>
            <input type="name" id="Name" placeholder="Nombre" />
          </div>

          <div className="Form-item">
            <label htmlFor="LastName">
              <i className="fas fa-user"></i>
            </label>
            <input type="lastName" id="LastName" placeholder="Apellido" />
          </div>

          <div className="Form-item">
            <label htmlFor="Mail">
              <i className="fas fa-envelope"></i>
            </label>
            <input type="email" id="Mail" placeholder="Correo Electrónico" />
          </div>

          <div className="Form-item">
            <label htmlFor="Phone">
              <i className="fas fa-phone-alt"></i>
            </label>
            <input type="phone" id="Phone" placeholder="Número de Télefono" />
          </div>

          <div className="Form-item">
            <label htmlFor="PostalCode">
              <i className="fas fa-map-marker-alt"></i>
            </label>
            <select name="ListAddress" id="ListAddress">
              <option value="Default">Código Postal</option>
              <option value="89000">89000 - Tampico</option>
              <option value="11000">11000 - Ciudad de México</option>
            </select>
          </div>

          <div className="Form-item">
            <label htmlFor="Colonia">
              <i className="fas fa-map-marker-alt"></i>
            </label>
            <input type="text" id="Colonia" placeholder="Colonia" />
          </div>

          <div className="Form-item">
            <label htmlFor="State">
              <i className="fas fa-map-marker-alt"></i>
            </label>
            <input type="text" id="State" placeholder="Estado/Región" />
          </div>

          <div className="Form-item">
            <label htmlFor="City">
              <i className="fas fa-map-marker-alt"></i>
            </label>
            <input type="city" id="City" placeholder="Ciudad" />
          </div>

          <div className="Form-item">
            <label htmlFor="Municipio">
              <i className="fas fa-map-marker-alt"></i>
            </label>
            <input
              type="text"
              id="Municipio"
              placeholder="Delegación o Munucipio"
            />
          </div>

          <div className="Form-item">
            <label htmlFor="AddressItem">
              <i className="fas fa-map-marker-alt"></i>
            </label>
            <input
              type="address"
              id="AddressItem"
              placeholder="Delegación o Munucipio"
            />
          </div>
        </form>
      </article>
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
    </section>
  );
};

export default Payment;
