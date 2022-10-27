import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col align-center justify-center">
      <Helmet>
        <title>Barber 902 | Contact </title>
      </Helmet>
      <section className="reservation">
        <h1>Réservez dès maintenant au</h1>

        <h2 className="telephone">09 83 86 08 51</h2>
      </section>

      <section className="color horaires_container">
        <h2>HEURE D'OUVERTURE</h2>
        <div className="flex-col justify-center align-center horaire_container">
          <p>Lundi : 10h00 à 19h00</p>
          <p>Mardi : 10h00 à 19h00</p>
          <p>Mercredi : 10h00 à 19h00</p>
          <p>Jeudi : 10h00 à 19h00</p>
          <p>Vendredi : 10h00 à 19h00</p>
          <p>Samedi : 10h00 à 19h00</p>
          <p>Dimanche : Fermé</p>
        </div>
      </section>
      <section className="trouver">
        <h2>Nous retrouver</h2>
        <p>41 Quai de Malakoff, 44000 Nantes, France</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10840.415536772409!2d-1.5409028!3d47.2145496!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb635174ecb5abb0c!2sBarber%20902!5e0!3m2!1sfr!2ses!4v1666881394540!5m2!1sfr!2ses"
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="google maps"
          className="iframe"
        />
      </section>
    </div>
  );
}

export default Contact;
