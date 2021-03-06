import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="NavBar">
      <a href="#Top" className="view">
        About Me
      </a>
      {/* <a href="#Top" class="view">Read Me</a> */}
      <a href="#Skills" className="view">
        Skills
      </a>
      <a href="#Projects" className="view">
        My work
      </a>
      <NavLink to="/blog" className="view">
        Blog
      </NavLink>
    </div>
  );
};

export default NavBar;
