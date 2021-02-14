import react from "react";
import { Link, BrowserRouter as Router, NavLink } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="NavBar">
      <a href="#Top" className="view">
        About Me
      </a>
      <a href="#Projects" className="view">
        My work
      </a>
      {/* <a href="#Top" class="view">Read Me</a> */}
      <a href="#Skills" className="view">
        Skills
      </a>
    </div>
  );
};

export default NavBar;
