import React from "react";
import "./Hero.css";

import spiderRushImg from "../../public/images/Spider.png";
import TLKImg from "../../public/images/TLK.png";
import NinjasImg from "../../public/images/Ninjas.png";
import IgluImg from "../../public/images/Iglu.png";

const projects = [
  {
    title: "Spider Rush",
    description: "Spider Rush es un juego de plataformas en 2D con vista lateral donde tomas el control de una araña con habilidades especiales . A través de niveles diseñados a mano, deberás superar cada nivel combinando mecánicas como por paredes y techos, balancearte con telarañas, hasta lograr abrir todas las puertas y llegar al final.",
    image: spiderRushImg, // 👈 usamos la importación
    link: "https://zahircheveste.itch.io/spider-rush",
  },
  {
    title: "The Last Knight",
    description: "Juego 2D con vista cenital. Desarrollado desde la plataforma de Scratch. Donde manejaremos a un caballero que debe buscar varios objetos por los distintos mapas esquivando obstáculos, se empieza con 5 corazones que indican la vida y si estos llegan a 0 pierde.",
    image: TLKImg,
    link: "https://scratch.mit.edu/projects/696499164",
  },
  {
    title: "Iglu Family",
    description: "Juego de plataformas, donde controlaremos a un pingùino, con el poder de crear una burbuja que lo ayudara a llegar a lugares inalcanzables. El objetivo del mismo es volver al iglú con tu familia sin morir en el intento.",
    image: IgluImg,
    link: "https://gd.games/dreanox/iglu-family",
  },
  {
    title: "Ninjas El Camino Sagrado",
    description: "En este juego nos metemos en la piel de un ninja, que se encuentra realizando su entrenamiento para convertirse en un maestro. Deberemos sortear distintos obstáculos hasta llegar a los cerezos que le mostraran el camino al siguiente nivel.",
    image: NinjasImg,
    link: "https://scratch.mit.edu/projects/1163615318/",
  },
];

const Hero = () => {
  return (
    <section className="hero">
      {projects.map((project, index) => (
        <div key={index} className="project">
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="project-info">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Ver juego
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero;
