import { useState, useEffect } from "react";
const useGetState = () => {
  const [state, setState] = useState([]);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://blackisp.herokuapp.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (payload) => {
    if (state.length != 0) {
      setState({
        ...state,
        cart: [...state.cart, payload],
      });
    } else {
      setState({
        ...state,
        cart: [...state, payload],
      });
    }
  };

  return {
    addToCart,
    state,
    products,
  };
};

export default useGetState;
