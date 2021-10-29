import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import "../styles/components/Header.styl";

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;
  return (
    <header>
      <section className="wrapper">
        <Link to="/">BlackSip</Link>
        <Link to="/payment">
          <i className="fas fa-shopping-cart">
            {cart != undefined && cart.length > 0 ? (
              <span>{cart.length}</span>
            ) : (
              ""
            )}
          </i>
        </Link>
      </section>
    </header>
  );
};

export default Header;
