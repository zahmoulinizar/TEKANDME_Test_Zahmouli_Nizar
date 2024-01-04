import React from "react";
import contenu from "../../assets/images/image (1).png";
import img from "../../assets/images/image (2).png"
import './contenu.css'
const Contenu = () => {
  return (
    <div class="section">
      <div class="container d-flex justify-content-between m-auto contenu ">
        <img src={contenu} alt="" />
        <div class="text-contenu d-flex " >
          <div>
          <h3 class="text-uppercase">Notre Histoire en Quelques Tuiles</h3>
          <p>
            Depuis 30 ans, EM Couverture s'est taillé une réputation impeccable
            dans le monde des toits à Monaco. Nous avons réinventé la
            couverture, tout en gardant nos pieds (et nos tuiles) sur terre.
            Découvrez notre parcours unique et notre engagement envers
            l'excellence.
          </p>
          </div>
          <button class="section-btn">en savoir plus</button>
        </div>
      </div>
      <div class="section-monaco container">
        <div class="section-monaco-contenu">
            <h3>Numéro 1 à <span>monaco</span> et en région <span>PACA</span></h3>
            <p>Notre engagement envers l'excellence, la précision et la qualité nous a hissés au sommet de l'industrie de la couverture à Monaco. Nous sommes fiers de notre statut de numéro 1, acquis grâce à un travail acharné, un savoir-faire inégalé et un sens de l'innovation constant.
            Lorsque vous choisissez notre entreprise, vous choisissez une tradition de qualité et une réputation qui ont résisté à l'épreuve du temps.</p>
        <button class="btn-monaco" >Prenons contact</button>
       <img src={img} alt="" />

        </div>
      </div>
      <div class="stats container">
            <div class="stat">
                <h2>+30</h2>
                <p>Ans d’activité</p>
            </div>
            <div class="stat">
                <h2>+100</h2>
                <p>Projets terminés</p>
            </div>
            <div class="stat">
                <h2>32</h2>
                <p>Experts pour vous accompagner</p>
            </div>
      </div>
    </div>
  );
};

export default Contenu;
