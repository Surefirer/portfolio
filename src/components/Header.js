import React from "react";
import DrawerToggleButton from "../components/sideDrawer/DrawerToggleButton";
import { Link } from "react-router-dom";

class Header extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY > 50;
      const nav = document.getElementById("nav");
      if (isTop) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    });
  }

  componentWillUnmont() {
    window.removeEventListener("scroll");
  }

  render() {
    return (
      <div id="nav" className="nav-bar">
        <div>
          <DrawerToggleButton click={this.props.drawerClickHandler} />
        </div>
        <div className="nav-bar__title">
          <h2>Weizhen Liang</h2>
        </div>
        <div className="nav-bar__menu">
          <ul>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/projects"}>
              <li>Project</li>
            </Link>
            <Link to={"/about"}>
              <li>About Me</li>
            </Link>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://mega.nz/file/FWpCFARK#C_2Fp921KaM11pRZ9OCoX6506TztZeTYenD6_L0OJyg"
            >
              <li>Resume</li>
            </a>
            <Link to={"/contact"}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
