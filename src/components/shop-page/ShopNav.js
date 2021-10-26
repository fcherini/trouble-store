import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ShopNav.scss";
import { BiMenuAltRight } from "react-icons/bi";
import {
  AiOutlineClose,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const ShopNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 992 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  return (
    <nav id="shop__nav">
      <div className="nav__container">
        <div
          className={`${"nav__links"} ${
            menuOpen && size.width < 992 ? "nav__links--isMenu" : ""
          }`}
        >
          <Link to="/2021" onClick={menuToggleHandler}>
            2021 collection
          </Link>
          <Link to="/tops" onClick={menuToggleHandler}>
            tops
          </Link>
          <Link to="/bottoms" onClick={menuToggleHandler}>
            bottoms
          </Link>
        </div>
        <p className="nav__logo">TROUBLE</p>
        <div className="nav__socials">
          <FaFacebookF className="nav__white__icon" />
          <FaInstagram className="nav__white__icon" />
          <FaTwitter className="nav__white__icon" />
        </div>
        <div className="nav__user">
          <AiOutlineUser className="nav__white__icon" />
          <AiOutlineShoppingCart className="nav__white__icon" />
        </div>
        <>
          {menuOpen ? (
            <AiOutlineClose onClick={menuToggleHandler} className="nav__icon" />
          ) : (
            <BiMenuAltRight onClick={menuToggleHandler} className="nav__icon" />
          )}
        </>
      </div>
    </nav>
  );
};

export default ShopNav;
