import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex-col justify-center align-center padding1 footer wrap">
      <small>
        Développé et designé par le
        <a href="https://grimoire-numerique.re/" className="grimoire">
          Grimoire Numérique
        </a>
      </small>
      <Link to="/Mentions">
        <small>Mentions Légales</small>
      </Link>
      <small>Tous droits réservés 2022 © </small>
    </footer>
  );
}

export default Footer;
