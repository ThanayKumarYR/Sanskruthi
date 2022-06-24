import React from "react";
import logo from "./images/logofinal.png";
import "../App.css";
export default function Sanskruthi() {
  return (
    <section className="Sankruthi" id="Sanskruthi">
      <div className="max-width">
        <h1 className="title">Sanskruthi</h1>
        <div className="content">
          <div className="content-left">
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
          <div className="content-right">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
