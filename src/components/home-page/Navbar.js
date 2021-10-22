import React, { useState, useEffect } from "react";
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
    <nav>
      <div className="nav__container">
        <p className="nav__logo">TROUBLE</p>
        <div
          className={`${"nav__links"} ${
            menuOpen && size.width < 768 ? "nav__links--isMenu" : ""
          }`}
        >
          <a href="/">home</a>
          <a href="/">about</a>
          <a href="/">store</a>
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
