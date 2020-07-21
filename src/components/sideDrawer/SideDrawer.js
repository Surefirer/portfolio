import React from "react";
import { Icons } from "../assets";
import { Link } from "react-router-dom";

const sideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show === true) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul className="side-drawer__menu" onClick={props.click}>
        <Link to={"/"}>
          <li>
            <img
              className="side-drawer__svg"
              src={Icons.home}
              alt="questionCircle"
            />
            Home
          </li>
        </Link>
        <Link to={"/projects"}>
          <li>
            <img
              className="side-drawer__svg"
              src={Icons.projectDiagram}
              alt="Projects"
            />
            Projects
          </li>
        </Link>
        <Link to={"/about"}>
          <li>
            <img
              className="side-drawer__svg"
              src={Icons.mehBlank}
              alt="About-Me"
            />
            About Me
          </li>
        </Link>
        <li>
          <img className="side-drawer__svg" src={Icons.userTie} alt="Resume" />
          Resume
        </li>
        <Link to={"/contact"}>
          <li>
            <img
              className="side-drawer__svg"
              src={Icons.commentAltSmile}
              alt="questionCircle"
            />
            Contact
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default sideDrawer;
