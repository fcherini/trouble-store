import React from "react";
import "./Item.scss";
import Img from "../../assets/savage-shirt.png";

function Item() {
  return (
    <div className="item">
      <div className="item__banner">
        <p>50% off</p>
      </div>
      <img className="item__img" src={Img} alt="savage-shirt" />
      <p className="item__title">Savage Shirt</p>
      <p className="item__price">$19.99</p>
    </div>
  );
}

export default Item;
