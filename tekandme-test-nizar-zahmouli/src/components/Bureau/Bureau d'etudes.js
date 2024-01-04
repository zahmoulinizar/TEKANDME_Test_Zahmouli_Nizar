import React from 'react'
import './index.css'
import imgBureau from '../../assets/images/image (11).png'
const Bureau = () => {
  return (
    <div class="bureau" id='bureau'>
     <div class="contenu-bureau">
      <h3>Un bureau d’études innovant</h3>
     <p>Derrière chaque toit exceptionnel se cache une équipe de cerveaux brillants. Notre bureau d'études est l'endroit où l'innovation et 
      la précision se marient pour créer des toits qui défient les conventions.
       Nous faisons des calculs pour que vous n'ayez pas à le faire !</p>
       <button class="etude-btn" >EN SAVOIR PLUS </button>
      </div>
      <div class="image-bureau">
        <img src={imgBureau} alt='etude' />
      </div>
    </div>
  )
}

export default Bureau 

