import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between navbar">
      <Link to="/">Accueil</Link>
      <Link to="/Coupe">Nos Réalisations</Link>
      <Link to="/Tarifs">Nos tarifs</Link>
      <Link to="/Contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
