import React from "react";
import facades from '../../assets/images/unnamed (3).png'
import charpente from '../../assets/images/unnamed (1).png'
import zinguerie from '../../assets/images/unnamed (2).png'
import { GrNext, GrPrevious } from "react-icons/gr";
import './service.css'
const Service = () => (
  <div class="services container" id="service">
    <div class="slides">
          <a class="prev">
            <GrPrevious
              style={{
                width: "24px",
                height: "24px",
                fontSize: "48px",
                fontWeight: "700",
                color: "rgba(252, 252, 252, 1)",
              }}
            />
          </a>
          <a
            class="next"
           
          >
            <GrNext  style={{
              width: "24px",
              height: "24px",
              fontSize: "48px",
              fontWeight: "700",
              color: "rgba(252, 252, 252, 1)",
            }}/>
          </a>
        </div>
    <h5>Des Toits Qui Font la pluie et le beau temps</h5>
    <div class="service">
      <div class="service-1 serv">
        <div class="icons-img"><img src={charpente} alt="charpente"class="charpente" /></div>
        <h3>Charpente</h3>
        <p>
          Morbi tristique senectus et netus et malesuada fames ac turpis. Nisl
          rhoncus mattis rhoncus urna neque viverra. Ac orci phasellus egestas
          tellus rutrum tellus. Massa sapien faucibus et molestie ac feugiat
          sed lectus vestibulum. Vitae congue eu consequat ac felis donec.
          Sodales ut eu sem integer. Urna cursus eget nunc scelerisque.
          Sagittis nisl rhoncus mattis rhoncus urna.
        </p>
      </div>
      <div class="service-2 serv">
        <div class="icons-img"><img src={zinguerie} alt='zinguerie' class="zinguerie" /></div>
        <h3>zinguerie</h3>
        <p>
          Morbi tristique senectus et netus et malesuada fames ac turpis. Nisl
          rhoncus mattis rhoncus urna neque viverra. Ac orci phasellus egestas
          tellus rutrum tellus. Massa sapien faucibus et molestie ac feugiat
          sed lectus vestibulum. Vitae congue eu consequat ac felis donec.
          Sodales ut eu sem integer. Urna cursus eget nunc scelerisque.
          Sagittis nisl rhoncus mattis rhoncus urna.
        </p>
      </div>
      <div class="service-3 serv">
        <div class="icons-img"><img class="facades" src={facades} alt="facades" /></div>
        <h3>Façades</h3>
        <p>
          Morbi tristique senectus et netus et malesuada fames ac turpis. Nisl
          rhoncus mattis rhoncus urna neque viverra. Ac orci phasellus egestas
          tellus rutrum tellus. Massa sapien faucibus et molestie ac feugiat
          sed lectus vestibulum. Vitae congue eu consequat ac felis donec.
          Sodales ut eu sem integer. Urna cursus eget nunc scelerisque.
          Sagittis nisl rhoncus mattis rhoncus urna.
        </p>
      </div>
    </div>
    <div class="serv-btn">
      <button class="service-btn" type="button">voir tous nos services</button>

    </div>
  </div>
);

export default Service;
