import React from "react";
import cardImg1 from "../../assets/images/image (8).png";
import cardImg2 from '../../assets/images/image (9).png'
import './index.css'
const Realisation = () => {
  return (
    <div class="realisation" id="realisation">
     <div class="cards card1">
        <img src={cardImg1} class="img-top" alt="..." />
        <div class="card-body">
          <h5 class="cards-title">Nom de la réalisation</h5>
          <p class="cards-text">
            Morbi tristique senectus et netus et malesuada fames ac turpis. Nisl
            rhoncus mattis rhoncus urna neque viverra. Ac orci phasellus egestas
            tellus rutrum tellus. Massa sapien faucibus et molestie ac feugiat
            sed lectus vestibulum. Vitae congue eu consequat ac felis donec.
            Sodales ut eu sem integer. Urna cursus eget nunc scelerisque.
            Sagittis nisl rhoncus mattis rhoncus urna.
          </p>
        </div>

        <div class="card-button">
          <button href="#" class="card-link">
            plus d'infos
          </button>
        </div>
      </div>
      <div class="cards card2">
        <img src={cardImg2} class="img-top" alt="..." />
        <div class="card-body">
          <h5 class="cards-title">roca team monaco</h5>
          <p class="cards-text">
            Morbi tristique senectus et netus et malesuada fames ac turpis. Nisl
            rhoncus mattis rhoncus urna neque viverra. Ac orci phasellus egestas
            tellus rutrum tellus. Massa sapien faucibus et molestie ac feugiat
            sed lectus vestibulum. Vitae congue eu consequat ac felis donec.
            Sodales ut eu sem integer. Urna cursus eget nunc scelerisque.
            Sagittis nisl rhoncus mattis rhoncus urna.
          </p>
        </div>

        <div class="card-button">
          <button href="#" class="card-link">
            plus d'infos
          </button>
        </div>
      </div>
      <div class="cards card3">
        <img src={cardImg2} class="img-top" alt="..." />
        <div class="card-body">
          <h5 class="cards-title">Carmelha</h5>
          <p class="cards-text">
            Morbi tristique senectus et netus et malesuada fames ac turpis. Nisl
            rhoncus mattis rhoncus urna neque viverra. Ac orci phasellus egestas
            tellus rutrum tellus. Massa sapien faucibus et molestie ac feugiat
            sed lectus vestibulum. Vitae congue eu consequat ac felis donec.
            Sodales ut eu sem integer. Urna cursus eget nunc scelerisque.
            Sagittis nisl rhoncus mattis rhoncus urna.
          </p>
        </div>

        <div class="card-button">
          <button href="#" class="card-link">
            plus d'infos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Realisation;
