import React, { useEffect, useState } from "react";

import "../styles/components/Form.styl";

const FormAddress = () => {
  const [data, setData] = useState({
    name: "",
    lastName: "",
    mail: "",
    phone: "",
    postalCode: "",
    colonia: "",
    state: "",
    city: "",
    municipio: "",
    address: "",
  });

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  //estado codigo postal
  const [postalCode, setPostalCode] = useState([]);
  const options = [];

  //trae data de la api
  const getCode = async (code) => {
    const response = fetch(
      `https://blackisp.herokuapp.com/postalCodes/${code}`
    );
    const data = await (await response).json();
    data.colonies.map((item) => {
      options.push(
        <option value={item} key={item}>
          {item}
        </option>
      );
    });

    setPostalCode({
      ...postalCode,
      code: data.code,
      state: data.state,
      city: data.city,
      town: data.town,
      colonies: options,
    });
  };

  //al cambiar el select trae data
  const handlePostalCodeChange = (e) => {
    getCode(e.target.value);
  };

  const handleSend = (e) => {
    e.preventDefault();
  };

  return (
    <article className="Form-address">
      <div className="Form-address-head">
        <h2>Dirección de envio</h2>
      </div>
      <form action="" className="Form-address-body" onSubmit={handleSend}>
        <div className="Form-item">
          <label htmlFor="name">
            <i className="fas fa-user"></i>
          </label>
          <input
            type="name"
            name="name"
            id="name"
            required
            placeholder="Nombre"
            onChange={handleInputChange}
          />
        </div>

        <div className="Form-item">
          <label htmlFor="lastName">
            <i className="fas fa-user"></i>
          </label>
          <input
            type="lastName"
            name="lastName"
            id="lastName"
            required
            placeholder="Apellido"
            onChange={handleInputChange}
          />
        </div>

        <div className="Form-item">
          <label htmlFor="mail">
            <i className="fas fa-envelope"></i>
          </label>
          <input
            type="email"
            name="mail"
            id="mail"
            required
            placeholder="Correo Electrónico"
            onChange={handleInputChange}
          />
        </div>

        <div className="Form-item">
          <label htmlFor="phone">
            <i className="fas fa-phone-alt"></i>
          </label>
          <input
            type="phone"
            name="phone"
            id="phone"
            required
            placeholder="Número de Télefono"
            onChange={handleInputChange}
          />
        </div>

        <div className="Form-item">
          <label htmlFor="postalCode">
            <i className="fas fa-map-marker-alt"></i>
          </label>
          <select
            name="postalCode"
            id="ListAddress"
            onChange={handlePostalCodeChange}
          >
            <option>Selecciona Código postal</option>
            <option value="89000">89000 - Tampico</option>
            <option value="11000">11000 - Ciudad de México</option>
          </select>
        </div>

        <div className="Form-item">
          <label htmlFor="colonia">
            <i className="fas fa-map-marker-alt"></i>
          </label>
          <select name="colonia" id="colonia">
            <option>Selecciona una colonia</option>
            {postalCode.colonies}
          </select>
        </div>

        <div className="Form-item">
          <label htmlFor="state">
            <i className="fas fa-map-marker-alt"></i>
          </label>
          <input
            type="text"
            name="state"
            id="state"
            required
            placeholder="Estado/Región"
            onChange={handleInputChange}
            value={postalCode.state || ""}
          />
        </div>

        <div className="Form-item">
          <label htmlFor="city">
            <i className="fas fa-map-marker-alt"></i>
          </label>
          <input
            type="country"
            name="city"
            id="city"
            placeholder="Ciudad"
            onChange={handleInputChange}
            value={postalCode.city || ""}
            required
          />
        </div>

        <div className="Form-item">
          <label htmlFor="municipio">
            <i className="fas fa-map-marker-alt"></i>
          </label>
          <input
            type="text"
            name="municipio"
            id="municipio"
            required
            placeholder="Delegación o Munucipio"
            value={postalCode.town || ""}
            onChange={handleInputChange}
          />
        </div>

        <div className="Form-item">
          <label htmlFor="addressItem">
            <i className="fas fa-map-marker-alt"></i>
          </label>
          <input
            type="text"
            name="addressItem"
            id="addressItem"
            placeholder="Delegación o Munucipio"
            required
            onChange={handleInputChange}
          />
        </div>
        <button type="button">Libreta de direcciones</button>
        <button>Enviar</button>
      </form>
    </article>
  );
};

export default FormAddress;
