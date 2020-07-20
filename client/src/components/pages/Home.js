import React from "react";
import { Icons } from "../assets";

function Home() {
  return (
    <div className="main">
      <div className="avatar">
        <img src={Icons.Avatar} alt="avatar" />
      </div>

      <div className="info">
        <div className="info__title">
          <div className="info__titleWrapper">
            <h1>Full Stack </h1>
            <h1>Web Developer</h1>
          </div>
          <hr />
          <p>
            JavaScript | React | Node JS | Express | SQL | HTML5 | SASS | CSS3
          </p>
        </div>
      </div>

      <div className="skillShow">
        <img src={Icons.javascript} alt="" />
        <img src={Icons.react} alt="" />
        <img src={Icons.nodejs} alt="" />
        <img src={Icons.express} alt="" />
        <img src={Icons.mysql} alt="" />
        <img src={Icons.html5} alt="" />
        <img src={Icons.css3} alt="" />
        <img src={Icons.sass} alt="" />
      </div>

      <div className="social">
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
    </div>
  );
}

export default Home;
