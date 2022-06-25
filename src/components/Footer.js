import React from "react";
import "../App.css";
import logo from "./images/logofinal.png";

export default function Footer() {
  return (
    <footer>
      <img src={logo} alt="logo" />
      <div className="foo-content">
        <div id="div1">
          <p>© Sanskruthi 2022 All rights reserved</p>
        </div>
        <div id="div2">
          <i class="fa fa-envelope"></i>
          <i class="fab fa-twitter"></i>
          <i class="fa fa-instagram"></i>
          <i class="fab fa-facebook-f"></i>
        </div>
        <div id="div3">
          <div>
            <h3>Designed and Devolped by</h3>
            <h3>THANAY KUMAR Y R</h3>
            <div>
              <i class="fa fa-github"></i>
              <i class="fa fa-linkedin"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
