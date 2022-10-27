import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Navbar from "./Navbar";
import burger from "../assets/menu.png";

function Burger() {
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <header className="flex padding-header justify-between align-center">
      <button
        type="button"
        onClick={() => setOpenBurger(!openBurger)}
        className="mobile no_button"
      >
        <img
          src={burger}
          alt="menu de navigation sur le site internet - trois lignes de navigation"
          className="burger"
        />
      </button>
      <Link to="/">
        <img
          src="https://scontent-mad1-2.xx.fbcdn.net/v/t39.30808-6/301443427_556650462998417_8691578651850337839_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=YTz3YDc7BR8AX9iRTp2&tn=061AOveasuvNzIkc&_nc_ht=scontent-mad1-2.xx&oh=00_AfCnQzhGncmeKj3GbvVD10TLVl66mblRC2M121uo6F7-rQ&oe=635FA427"
          alt="logo de barber902 deux ciseaux"
          className="logo"
        />
      </Link>
      {openBurger && <Nav setOpenBurger={setOpenBurger} />}
      <div className="desktop">
        <Navbar setOpenBurger={setOpenBurger} />
      </div>
    </header>
  );
}

export default Burger;
