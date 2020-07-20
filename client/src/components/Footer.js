import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "./assets";

function Footer() {
  return (
    <div className="footer">
      <div className="footerContainter">
        <Link to={"/projects"}>
          <p>Projects</p>
        </Link>
        <Link to={"/about"}>
          <p>About Me</p>
        </Link>
        <Link to={"/contact"}>
          <p>Contact Me</p>
        </Link>
      </div>
      <div className="footer__social">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/weizhen-liang/"
        >
          <div className="linkedin">
            <img src={Icons.linkedin} alt="linkedin" />
          </div>
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/Surefirer"
        >
          <div className="github">
            <img src={Icons.githubSquare} alt="githubSquare" />
          </div>
        </a>
      </div>
      <p>©2020 All Rights Reserved</p>
    </div>
  );
}

export default Footer;
