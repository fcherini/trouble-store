import React, { useState, useEffect } from "react";
import { Link as Anchor } from "react-scroll";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
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
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  return (
    <nav id="home__nav">
      <div className="nav__container">
        <p className="nav__logo">TROUBLE</p>
        <div
          className={`${"nav__links"} ${
            menuOpen && size.width < 768 ? "nav__links--isMenu" : ""
          }`}
        >
          <Anchor
            to="home"
            smooth={true}
            duration={1000}
            onClick={menuToggleHandler}
          >
            home
          </Anchor>
          <Anchor
            to="about"
            smooth={true}
            duration={1000}
            onClick={menuToggleHandler}
          >
            about
          </Anchor>
          <Link to="/shop" onClick={menuToggleHandler}>
            shop
          </Link>
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

export default Navbar;
