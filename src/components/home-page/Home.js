import React, { useState } from "react";
import "./Home.scss";
import Img from "../../assets/img.png";

const Home = () => {
  return (
    <section id="home">
      <div className="home__container">
        <div className="home__text__half">
          <h1 className="home__title">
            Express
            <span className="home__title__span">Yourself.</span>
          </h1>
          <button type="button" className="btn">
            2021 collection
          </button>
        </div>
        <div className="home__imgs__half">
          <img src={Img} className="home__imgs" alt="girl" />
        </div>
      </div>
    </section>
  );
};

export default Home;
