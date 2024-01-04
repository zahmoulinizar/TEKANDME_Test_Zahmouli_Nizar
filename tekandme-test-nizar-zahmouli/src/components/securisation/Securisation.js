import React from 'react'
import secImg from '../../assets/images/image (12).png'
import secCovImg from '../../assets/images/image (28).png'
import './index.css'

const Securisation = () => {
  return (
    <div class="securisation" id='securisation'>
       <div class="image-sec">
        <img src={secImg}  alt='secImg' class="secImg"/>
        <img src={secCovImg} alt='secCovImg' class='secCovImg' />
       </div>
       <div class="text-sec">
        <h3>Inline sécurité</h3>
        <p>Massa eget egestas purus viverra. Nisi scelerisque eu ultrices vitae. 
          Orci eu lobortis elementum nibh tellus molestie nunc non. Ultrices in iaculis nunc sed 
           lacus viverra. Consequat semper viverra nam libero justo laoreet sit. 
           Nibh praesent tristique magna sit amet. Vulputate enim nulla aliquet porttitor. 
          Dui nunc mattis enim ut tellus elementum sagittis.</p>
          <button class="sec-btn text-uppercase">Voir sur facebook</button>

       </div>
    </div>
  )
}
export default Securisation
