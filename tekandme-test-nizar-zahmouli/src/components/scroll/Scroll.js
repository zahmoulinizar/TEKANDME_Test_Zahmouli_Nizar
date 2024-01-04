import React from "react";
import "./index.css";
import imgScroll1 from '../../assets/images/image (19).png'
import imgScroll2 from '../../assets/images/image (20).png'
import imgScroll3 from '../../assets/images/image (21).png'
import imgScroll4 from '../../assets/images/image (22).png'
import { GrNext, GrPrevious } from "react-icons/gr";

const Scroll = () => {
  return (
    <div class="scroll">
      <div class="d-flex justify-content-between">
      <h5>Ils parlent de nous</h5>
      <div class="slider">
          <a class="prev">
            <GrPrevious
              style={{
                width: "16px",
                height: "16px",
                fontSize: "38px",
                fontWeight: "700",
                color: "rgba(252, 252, 252, 1)",
              }}
            />
          </a>
          <a class="next">
            <GrNext  style={{
              width: "16px",
              height: "16px",
              fontSize: "38px",
              fontWeight: "700",
              color: "rgba(252, 252, 252, 1)",
            }}/>
          </a>
        </div>
      </div>
      <div class="scroll-images">
        <img src={imgScroll1} alt="scrol1" />
        <img src={imgScroll2} alt="scrol2" />
        <img src={imgScroll3} alt="scrol3" />
        <img src={imgScroll4} alt="scrol4" />
      </div>
    </div>
  );
};

export default Scroll;
