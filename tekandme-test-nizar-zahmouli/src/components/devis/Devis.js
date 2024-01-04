import React from "react";
import "./devis.css";
import imgStk from "../../assets/images/image (145).png";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
const Devis = () => {
  return (
    <section>
      <div class="devis container">
        <h3>evaluez votre projet</h3>
        <p>
          Vous envisagez des travaux de couverture ou de toiture ? Ne cherchez
          pas plus loin. Remplissez quelques détails, cliquez, et nous vous
          enverrons rapidement un devis personnalisé pour votre projet.
        </p>
        <button class="devis-btn">Demande de devis en ligne</button>
      </div>
      <div class="FAQ-section">
        <div class="FAQ-section-image">
          <div class="img-sticky">
            <img src={imgStk} alt="" />
          </div>
        </div>
        <div class="FAQ-section-contenu">
          <h3>Vos Interrogations Sous le Toit de l'Humour</h3>
          <div class="list-question">
            <div class="autolayaout active">
              <div class="question">
                <h6>
                  Peut-on utiliser des tuiles de couverture pour jouer au
                  bowling sur le toit ?
                </h6>
                <span >
                  <FaMinus />
                </span>
              </div>
              <div class="reponse">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Pellentesque dignissim enim sit amet venenatis urna cursus
                  eget nunc.
                </p>
              </div>
            </div>
            <div class="autolayaout">
              <div class="question">
                <h6>
                  Puis-je inviter mes amis à faire du camping sur mon toit ?
                </h6>
                <span>
                  <FaPlus />
                </span>
              </div>
              <div class="reponse">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Pellentesque dignissim enim sit amet venenatis urna cursus
                  eget nunc.
                </p>
              </div>
            </div>
            <div class="autolayaout">
              <div class="question">
                <h6>
                  Pouvez-vous me dire la meilleure blague de couvreur que vous
                  connaissiez ?
                </h6>
                <span>
                  <FaPlus />
                </span>
              </div>
              <div class="reponse">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Pellentesque dignissim enim sit amet venenatis urna cursus
                  eget nunc.
                </p>
              </div>
            </div>
            <div class="autolayaout">
              <div class="question">
                <h6>
                  Les chats et les chiens ont-ils des cours de danse sur les
                  toits la nuit ?
                </h6>
                <span>
                  <FaPlus />
                </span>
              </div>
              <div class="reponse">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Pellentesque dignissim enim sit amet venenatis urna cursus
                  eget nunc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Devis;
