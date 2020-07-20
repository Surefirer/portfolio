import React from "react";
import { Image } from "../assets";

function Projects() {
  return (
    <div className="main projectsMain">
      <div className="card-wrapper">
        <div className="projectCard">
          <div className="projectCard__cover">
            <img src={Image.reactCover} alt="" />
          </div>
          <div className="projectCard__desc">
            <p>this is a short description of this project.</p>
          </div>
          <div className="projectCard__btn">
            <button>Github</button>
            <button>Live Demo</button>
          </div>
        </div>

        <div className="projectCard">
          <div className="projectCard__cover">
            <img src={Image.reactCover} alt="" />
          </div>
          <div className="projectCard__desc">
            <p>this is a short description of this project.</p>
          </div>
          <div className="projectCard__btn">
            <button>Github</button>
            <button>Live Demo</button>
          </div>
        </div>

        <div className="projectCard">
          <div className="projectCard__cover">
            <img src={Image.reactCover} alt="" />
          </div>
          <div className="projectCard__desc">
            <p>this is a short description of this project.</p>
          </div>
          <div className="projectCard__btn">
            <button>Github</button>
            <button>Live Demo</button>
          </div>
        </div>

        <div className="projectCard">
          <div className="projectCard__cover">
            <img src={Image.reactCover} alt="" />
          </div>
          <div className="projectCard__desc">
            <p>this is a short description of this project.</p>
          </div>
          <div className="projectCard__btn">
            <button>Github</button>
            <button>Live Demo</button>
          </div>
        </div>

        <div className="projectCard">
          <div className="projectCard__cover">
            <img src={Image.reactCover} alt="" />
          </div>
          <div className="projectCard__desc">
            <p>this is a short description of this project.</p>
          </div>
          <div className="projectCard__btn">
            <button>Github</button>
            <button>Live Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
