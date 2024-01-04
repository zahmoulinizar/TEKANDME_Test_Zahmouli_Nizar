import React from 'react'
import imgs from "../../assets/images/image (2).png"
import { FaYoutube } from "react-icons/fa";
import './media.css'
const Media = () => {
  return (
    <div>
      <div class="section-video" id='media'>
        <h3>Une construction unique au monde</h3>
        <div class="d-flex justify-content-center w-100 m-auto ps-5 ">
          <p>Découvrez la villa Carmelha à Monaco </p>
          <input type="submit" class="media-btn" value="voir le projet" />
        </div>
          <img src={imgs}  id="media-img" alt="media" />
        <div class="media">
          
        </div>
        <div class="youtube"><button  class="youtube-btn"> <FaYoutube class="FaYoutube"/>Voir notre chaine youtube</button></div>
      </div>
      <div class="titre-sticky">
        <h1>Maîtrisez l'Art de la Couverture : Notre Savoir-faire en Action</h1>
      </div>
    </div>
  );
}

export default Media
