import React from "react";
import "./pub.css";
import { AiFillInstagram } from "react-icons/ai";
import imgGal1 from "../../assets/images/image (16).png";
import imgGal2 from "../../assets/images/image (15).png";
import imgGal3 from "../../assets/images/image (14).png";
import imgGal4 from "../../assets/images/image (13).png";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const Publication = () => {
  return (
    <div class="publication container">
      <div class="pubInsta">
        <h5>Ce qu’il se passe sur insta</h5>
        <AiFillInstagram style={{ width: "32px", height: "32px" }} />
      </div>
      <div class="gallery">
        <div class="slide">
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
        <img src={imgGal1} alt="" />
        <img src={imgGal2} alt="" />
        <img src={imgGal3} alt="" />
        <img src={imgGal4} alt="" />
      </div>
      <button class="instaPub-btn">Rejoignez-nous sur instagram</button>
    </div>
  );
};

export default Publication;
