import React from "react";
import { Image } from "../assets";

function Projects() {
  return (
    <div className="main projectsMain">
      <div className="card-wrapper">
        <div className="projectCard">
          <div className="projectCard__cover">
            <img src={Image.project1} alt="" />
          </div>
          <div className="projectCard__desc">
            <p>YYRO - A gaming website bulit with react and node js. .</p>
          </div>
          <div className="projectCard__btn">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/Surefirer/Capstone-Project"
            >
              <button>Github</button>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.yyro.ca/"
            >
              <button>Live Demo</button>
            </a>
          </div>
        </div>

        <div className="projectCard">
          <div className="projectCard__cover">
            <img src={Image.project2Brainflix} alt="" />
          </div>
          <div className="projectCard__desc">
            <p>Brainflix - A youtube style clone website built with React</p>
          </div>
          <div className="projectCard__btn">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/Surefirer/weizhen-liang-brainflix"
            >
              <button>Github</button>
            </a>
            {/* <button>Live Demo</button> */}
          </div>
        </div>

        <div className="projectCard">
          <div className="projectCard__cover">
            <img src={Image.project3Bandsite} alt="" />
          </div>
          <div className="projectCard__desc">
            <p>
              Bandsite - shows schedule display, post comment and a lot more!
            </p>
          </div>
          <div className="projectCard__btn">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/Surefirer/bandsite"
            >
              <button>Github</button>
            </a>
            {/* <button>Live Demo</button> */}
          </div>
        </div>

        <div className="projectCard">
          <div className="projectCard__cover">
            <img src={Image.project4Instock} alt="" />
          </div>
          <div className="projectCard__desc">
            <p>Instock - a stock system website built with react.</p>
          </div>
          <div className="projectCard__btn">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/Surefirer/InStock-Sprint-I-Pod-04"
            >
              <button>Github</button>
            </a>
            {/* <button>Live Demo</button> */}
          </div>
        </div>

        <div className="projectCard">
          <div className="projectCard__cover">
            <img src={Image.project5Travelsite} alt="" />
          </div>
          <div className="projectCard__desc">
            <p>A travel site - built with html and css.</p>
          </div>
          <div className="projectCard__btn">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/Surefirer/BrainStation-Web-Development-Course/tree/master/Travel-Site-project"
            >
              <button>Github</button>
            </a>
            {/* <button>Live Demo</button> */}
          </div>
        </div>
        <div className="projectCard">
          <div className="projectCard__cover">
            <img src={Image.project6Protfolio} alt="" />
          </div>
          <div className="projectCard__desc">
            <p>Protfolio Website - showcase my project built with react</p>
          </div>
          <div className="projectCard__btn">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/Surefirer/portfolio"
            >
              <button>Github</button>
            </a>
            {/* <button>Live Demo</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
