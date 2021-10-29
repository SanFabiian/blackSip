import React from "react";
import formatIsoTime from "../utils/formatDate";
import "../styles/components/Footer.styl";
const Footer = () => {
  return (
    <footer className="Footer">
      Todos los derechos reservados - SanFabiian {formatIsoTime(new Date())}
    </footer>
  );
};
export default Footer;
