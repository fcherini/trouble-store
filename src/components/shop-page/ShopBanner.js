import React from "react";
import "./ShopBanner.scss";
import Slide1 from "../../assets/slide1.png";
import Slide2 from "../../assets/slide2.png";

function ShopBanner() {
  return (
    <section>
      <div className="banner__container">
        <img src={Slide1} alt="slide1" />
        <img src={Slide2} alt="slide1" />
        <button className="btn-sm">2021 collection</button>
      </div>
    </section>
  );
}

export default ShopBanner;
