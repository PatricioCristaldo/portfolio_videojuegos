import { useState, useEffect } from "react";
import './About.css';
import PatricioImg from "../../public/images/Patricio2.png";


export default function About() {
  return (
    <section className="about" id="about">
      <div className="mainContainer" id="about">
        <div className="about-text" >
          <h2>Hola! Yo soy <h2>PATRICIO CRISTALDO</h2></h2>
          <p>
            Graduado como técnico en producción y desarrollo de videojuegos en la Universidad Nacional de Jose C Paz. Tengo interés en el diseño de mecánicas, la programación y la creación de experiencias interactivas. A lo largo de distintos proyectos he explorado diferentes géneros y enfoques, desde plataformas 2D hasta juegos rítmicos y experiencias narrativas.
          </p>
          <br></br>
          <h2>Skills</h2>
          <p>
<h3>-Motores: </h3>Unity, Godot, GDevelop, Scratch
<br></br>
<h3>-Lenguajes:</h3> C#, GDScript, JavaScript (web)
<br></br>

<h3>-Diseño de juegos:</h3> Mecánicas, prototipado, balanceo, diseño de niveles
<br></br>

<h3>-Audio:</h3> Integración y sincronización de sonidos y música
<br></br>

<h3>-Otros:</h3> Trabajo con assets 2D, testing y corrección de bugs, control de versiones con Git</p>
        </div>
        <div className="about-img" > 
        <img src={PatricioImg} alt="Patricio" />

        </div>
      </div>
    </section>
  );
}
