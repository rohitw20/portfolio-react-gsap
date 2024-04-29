import React, { useState } from "react";
import "./Navbar.css";
import { SiWebmoney } from "react-icons/si";
import { menu } from "../../data";
import { Link } from "react-scroll";
import { FaArrowUpRightFromSquare, FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <nav className="navbar__container">
      {showSidebar ? (
        <div
          className="overlay"
          onClick={() => setShowSidebar(!showSidebar)}
        ></div>
      ) : (
        ""
      )}
      <div className="logo__container">
        <SiWebmoney />
      </div>
      <div className={`tab__group ${showSidebar ? "show" : ""}`}>
        <span
          className="icon__container close__btn"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <FaTimes />
        </span>
        {menu.map((list, index) => (
          <Link
            activeClass="active"
            className="tab__item name"
            to={list.name.toLocaleLowerCase()}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            key={index}
          >
            {list.name}
          </Link>
        ))}
      </div>
      <div className="nav__buttons__group">
        <button className="btn btn__primary">
          Hire Me <FaArrowUpRightFromSquare />
        </button>
        <FaBarsStaggered
          className="menu"
          onClick={() => setShowSidebar(!showSidebar)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
