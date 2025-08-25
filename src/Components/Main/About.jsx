import { useState, useEffect } from "react";
import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="mainContainer" id="about">
        <div className="about-text" >
          <h2>Hola! Yo soy </h2>
          <span>PATRICIO</span>
          <span>CRISTALDO</span>
          <p>
            Me dedico a hacer trabajos de desarrollo web, si te interesa lo que hago,
            no dudes en hacer click en el botón de abajo.
          </p>
          <a
            href="mailto:patricio_cristaldo@outlook.com?subject=Consulta&body=Hola, me gustaría contarte acerca de mi proyecto"
            className="cta-button"
          >
            CUÉNTAME SOBRE TU PROYECTO
          </a>
        </div>
      </div>
    </section>
  );
}
