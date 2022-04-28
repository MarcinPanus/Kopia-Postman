import React from "react";
import style from "./About.module.css";

function About() {
  return (
    <div className={style.container}>
      <div className={style.infoContainer}>
        <h1>Architektura rozwiązań chmurowych</h1>
        <h2>Temat projektu: Kopia postmana</h2>
        <div>
          <p>Marcin Panuś</p>
        </div>
      </div>
    </div>
  );
}

export default About;
