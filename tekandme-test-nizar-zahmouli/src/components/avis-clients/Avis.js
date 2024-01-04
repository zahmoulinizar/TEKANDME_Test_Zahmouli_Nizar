import React from "react";
import etoile from "../../assets/images/unnamed (48.png";
import "./index.css";
import clara from "../../assets/images/clara.png";
import aurlean from "../../assets/images/aurlean.png";
import fransois from "../../assets/images/francois.png";
const Avis = () => {
  return (
    <div class="avis-client">
      <div class="avis-clt">
        <div class="etl">
          <img src={etoile} alt="" class="etoile" />
          <img src={etoile} alt="" class="etoile" />
          <img src={etoile} alt="" class="etoile" />
          <img src={etoile} alt="" class="etoile" />
          <img src={etoile} alt="" class="etoile" />
        </div>

        <h2>Ce que Pensent nos clients</h2>
        <button class="client-btn">Prenons contact</button>
      </div>
      <div class="pub-insta">
        <div class="card">
          <img src={clara} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Clara dupont</h5>
            <p class="card-text">
              J'ai fait appel à l'Entreprise Monégasque de Couverture pour une
              réparation de toit et je suis ravi du résultat. Leur équipe est
              compétente, efficace, et l'humour qu'ils apportent à leur travail
              est un vrai plus. Je les recommande vivement !
            </p>
          </div>
        </div>
        <div class="card">
          <img src={fransois} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">françois dupuis</h5>
            <p class="card-text">
              C'est rare de trouver une entreprise qui peut allier compétence
              technique et convivialité de cette manière. Je les recommande
              vivement à tous ceux qui ont besoin de services de couverture de
              premier ordre.
            </p>
          </div>
        </div>
        <div class="card">
          <img src={aurlean} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Aurélien lemarchand</h5>
            <p class="card-text">
              C'est un vrai plaisir de travailler avec eux. Récemment, j'ai eu
              besoin d'une réparation de toit en urgence, et ils ont réagi
              rapidement et avec professionnalisme. Le résultat était
              impeccable, comme toujours. Je recommande cette entreprise à tous
              ceux qui recherchent des experts de la couverture avec une touche
              d'originalité.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avis;
