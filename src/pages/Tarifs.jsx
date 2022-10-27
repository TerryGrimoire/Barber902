import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import tarifData from "../data/tarifsData";

function Tarifs() {
  return (
    <div className="tarifs_container">
      <Helmet>
        <title>Barber 902 | Nos tarifs </title>
      </Helmet>
      <h1 className="h1">NOS TARIFS</h1>
      {tarifData.map((el) => (
        <div key={el.id} className="flex justify-between align-center tarif">
          <h3>{el.title}</h3>
          <p>{el.price}</p>
          <small>{el.duration}</small>
        </div>
      ))}

      <Link to="/Contact">
        <button type="button" className="button_style orange">
          Réserver maintenant
        </button>
      </Link>
    </div>
  );
}

export default Tarifs;
