import React from "react";
import { Link } from "react-router-dom";
import background from "../assets/barber.mp4";
import homeData from "../data/homeData";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import logo from "../assets/logo.jpg";

export default function Home() {
  return (
    <main>
      <section className="relative desktop_landing">
        <div className="main_h1">
          <h1>
            <span className="desktop">BIENVENUE CHEZ </span> BARBER 902
          </h1>
          <h2>Coiffeur et barbier pour homme</h2>
        </div>

        <div className="veil" />
        <video autoPlay muted loop className="main_video">
          <source src={background} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <section className="desktop_experience a_propos_container">
        <div className="desktop logo_container">
          <img
            src={logo}
            alt="logo de barber902 deux ciseaux"
            className="desktop_logo_home"
          />
        </div>
        <article className="a_propos">
          <h3>UNE EXPÉRIENCE INOUBLIABLE !</h3>
          <p>
            Situé à deux pas de la gare, sur les quais du quartier Malakoff,
            Ryad et son équipe vous accueillent avec le sourire dans un salon au
            mobilier tendance vintage qui vous donnerez envie de revenir toutes
            les semaines.
          </p>
          <div className="trait" />
          <p>
            Installez-vous et laissez vous guider par les conseils avisés d’une
            équipe de pros qui vous est entièrement dédiée. Demandez la coupe
            qui vous fait envie et l’équipe du salon Barber 902 s’afférera pour
            réaliser tous vos souhaits avec autant de passion que de
            savoir-faire.
          </p>
          <div className="trait" />
          <p>
            En plus d’une coupe de cheveux profitez-en aussi pour soigner votre
            barbe avec des soins haut de gamme et une taille de barbe à
            l’ancienne réalisée par un pro. Chez Barber 902 vous profiterez
            d’une ambiance chaleureuse, avec une équipe toujours encline à rire
            avec les clients pour mieux vous mettre à l’aise.
          </p>
        </article>
      </section>
      <section className="padding0 desktop_images_container">
        {homeData.map((data) => (
          <div className="relative homeData_container">
            <img src={data.src} alt={data.alt} className="home_image" />
            <Link to={data.link}>
              <button type="button" className="button_home">
                {data.title}
              </button>
            </Link>
            <div className="veil2" />
          </div>
        ))}
      </section>
      <section className="flex-col justify-center align-center reseaux">
        <h3>VISITER NOS RÉSEAUX SOCIAUX</h3>
        <div className="flex alig-center justify-center">
          <a href="https://www.instagram.com/barber_902/?hl=fr">
            <img src={Instagram} alt="logo instagram" />
          </a>
          <a href="https://www.facebook.com/902barber">
            <img src={Facebook} alt="logo Facebook" />
          </a>
        </div>
      </section>
    </main>
  );
}
