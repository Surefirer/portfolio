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
          <h1>Full Stack </h1>
          <h1>Web Developer</h1>
          <hr />
          <p>
            JavaScript | React | React Native | Node JS | Express | SQL |
            HTML/SASS
          </p>
        </div>
      </div>

      <div className="social">
        <div className="linkedin">
          <img src={Icons.linkedin} alt="linkedin" />
        </div>
        <div className="github">
          <img src={Icons.githubSquare} alt="githubSquare" />
        </div>
      </div>
    </div>
  );
}

export default Home;
