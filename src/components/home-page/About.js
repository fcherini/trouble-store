import React from "react";
import "./About.scss";

function About() {
  return (
    <div>
      <section id="about">
        <div className="about__container">
          <h1 className="about__title">
            clothes that
            <br />
            speak up.
          </h1>
          <div className="about__text">
            <p>
              <span className="about__span"></span> Our mission is to create
              clothes that tell the world exactly who you are without breaking
              the bank.
            </p>
            <p>
              <span className="about__span"></span>We were funded in 2019 after
              we struggled with finding good and affordale clothes that also
              fashionable and expressive.
            </p>
            <p>
              <span className="about__span"></span>Check out our newest
              collection to see what everyone is raving about.
            </p>
          </div>
          <button className="about__btn btn btn-sm">2021 collection</button>
        </div>
      </section>
    </div>
  );
}

export default About;
