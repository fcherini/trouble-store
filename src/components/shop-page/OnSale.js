import React from "react";
import Item from "./Item";
import "./OnSale.scss";

function OnSale() {
  return (
    <section id="onsale">
      <div className="section__container">
        <h2 className="section__title">On Sale.</h2>
        <div className="item__container">
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </section>
  );
}

export default OnSale;
