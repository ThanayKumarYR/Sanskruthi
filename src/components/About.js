import React from "react";
import "../App.css";
import logo from "./images/logofinal.png";

export default function About() {
  return (
    <section className="About" id="About">
      <div className="max-width">
        <h1 className="title">About</h1>
        <div className="content">
          <div className="content-left">
            <img src={logo} alt="" />
          </div>
          <div className="content-right">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              ullam inventore iusto, sint et adipisci labore ut culpa cumque
              dolorem, magni, repellat ab? Laborum, consequuntur nobis alias
              voluptate eaque aliquid impedit architecto at ducimus, vel totam
              ea incidunt tempore fuga maxime sit molestiae dolor sequi quod,
              ullam voluptatibus quas nulla? Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Enim eligendi at quisquam veniam
              illum ipsa modi exercitationem explicabo laborum ratione nam
              distinctio error fugiat, doloribus odio nesciunt corrupti eum
              molestias, sunt, reprehenderit itaque aliquam accusamus? Id
              officia provident consequatur debitis voluptatibus nisi voluptatem
              eos quam impedit, eum repellendus minus reiciendis!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
