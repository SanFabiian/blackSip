import React from "react";

import FormAddress from "../components/FormAddress";
import PaymentCard from "../components/PaymentCard";

import "../styles/components/MainPayment.styl";

const Payment = () => {
  return (
    <section className="Main Main-payment wrapper">
      <FormAddress />
      <PaymentCard />
    </section>
  );
};

export default Payment;
