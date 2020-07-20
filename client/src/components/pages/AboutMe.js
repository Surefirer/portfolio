import React from "react";
import { Icons } from "../assets";

function AboutMe() {
  return (
    <div className="main aboutMain">
      <div className="aboutMain-container">
        <div className="avatar aboutMainAvatar">
          <img src={Icons.Avatar} alt="avatar" />
          <h1>About Me</h1>
        </div>

        <div className="aboutDesc">
          <p>
            Hi! I am Weizhen Liang. A Vancouver-based full stack web developer
            who loves building website.
          </p>
          <p>
            I have a Bachelor of Business Administration from University of
            Winnipeg. I am an experienced operations specialist with a
            demonstrated history of working in the hospitality and franchising
            industry. Recentlly decided to change my career to web
            developerment.{" "}
          </p>
          <p>
            I fell in love with coding during my gaming private server project
            that I was doing since 2018. Now I am ready and excited to turn my
            hobby into a career.
          </p>
          <p>
            When I am not coding, I play with my two little kids, find and fix
            bugs for my Ragnarok Online server.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
