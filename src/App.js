import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import SideDrawer from "./components/sideDrawer/SideDrawer";
import Home from "./components/pages/Home";
import AboutMe from "./components/pages/AboutMe";
import Resume from "./components/pages/Resume";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";

class App extends React.Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div style={{ height: "100%" }}>
          <Header drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer
            show={this.state.sideDrawerOpen}
            click={this.backdropClickHandler}
          />
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" exact component={Home} />
          <Route path="/about" exact component={AboutMe} />
          <Route path="/resume" exact component={Resume} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
