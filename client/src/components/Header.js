import React from "react";
import DrawerToggleButton from "../components/sideDrawer/DrawerToggleButton";

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
            <li>Resume</li>
            <li>About Me</li>
            <li>Project</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
