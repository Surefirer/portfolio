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
        <Link to={"/aboutme"}>
          <li>
            <img
              className="side-drawer__svg"
              src={Icons.mehBlank}
              alt="About-Me"
            />
            About Me
          </li>
        </Link>
        <Link to={"/resume"}>
          <li>
            <img
              className="side-drawer__svg"
              src={Icons.fileUser}
              alt="Resume"
            />
            Resume
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
      <div className="side-drawer__social">
        <div className="side-drawer__socialWrapper1">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.youtube.com/channel/UCWSJggjVEluC4rS54BbliPQ?view_as=public"
          >
            <img
              className="side-drawer__svg--social"
              src={Icons.youtube}
              alt="youtube"
            ></img>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default sideDrawer;
