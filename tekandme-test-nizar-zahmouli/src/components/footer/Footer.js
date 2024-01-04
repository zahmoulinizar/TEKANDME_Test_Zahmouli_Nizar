import React from "react";
import "./main.css";
import logo from "../../assets/images/unnamed.png";
import { IoLocation } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import footerImg from "../../assets/images/castor png 2.png";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <div class="footer">
      <div class="footer1">
        <img src={logo} alt="logo" class="footer-logo" />
        <h3>prenez rendez-vous dès maintenant</h3>
        <div class="address">
          <IoLocation
            style={{
              color: "rgba(43, 43, 43, 0.7)",
              width: "18px",
              height: "21.73px",
              marginTop: "2px",
              marginLeft: "3px",
            }}
          />
          <p>1 rue Bel Respiro - 98000 Monaco</p>
        </div>
        <div class="call">
          <p>
            <MdCall
              style={{ color: "#2B2B2B", width: "18px", height: "18px" }}
            />
            +377 93 50 20 22
          </p>
          <button class="call-btn">Être contacté</button>
        </div>
        <div class="copyright">
          &copy; 2023, tous droits réservés. Développé par Tendances.Group{" "}
        </div>
      </div>
      <div class="footer2">
        <div>
          <span>Navigation</span>
          <ul>
            <li>Accueil</li>
            <li>A propos</li>
            <li>Bureau d'etudes</li>
            <li>travaux</li>
            <li>Actualités</li>
          </ul>
        </div>
        <div>
          <span>Services</span>

          <ul>
            <li>Charpente</li>
            <li>Couverture</li>
            <li>zinguerie</li>
            <li>Façades</li>
          </ul>
        <div class="social">
          <FaFacebookF />
          <AiFillInstagram />
          <FaLinkedinIn />
          <FaYoutube />
        </div>
        </div>
      </div>
      <img src={footerImg} alt="footer-img" class="castor" />
    </div>
  );
};

export default Footer;
