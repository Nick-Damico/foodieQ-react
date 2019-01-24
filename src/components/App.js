import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// Components
import NavigationBar from "./NavigationBar";
import LandingPage from "./pages/LandingPage";
import WelcomePage from "./pages/WelcomePage";
import SiteOverlay from "./overlay/SiteOverlay";
import SidePanel from "./overlay/SidePanel";
import CreateRecipe from "./recipes/CreateRecipe";
import { TweenMax, Back } from "gsap/TweenMax";
import { library } from "@fortawesome/fontawesome-svg-core";
import { connect } from "react-redux";
import { jwtLogin } from "../actions";
import {
  faTimes,
  faUserCircle,
  faBook
} from "@fortawesome/free-solid-svg-icons";
library.add(faTimes, faUserCircle, faBook);

class App extends Component {
  constructor(props) {
    super();

    this.page = React.createRef();
  }
  componentDidMount() {
    // If 'foodieq' token is present in localStorage a JWTlogin request is made to Api.
    const token = localStorage.getItem("foodieq-token");
    const { isSignedIn } = this.props;
    if (token && !isSignedIn) {
      this.props.jwtLogin(token);
    }
  }

  componentDidUpdate() {
    if (this.props.isSidePanelOpen) {
      TweenMax.to(this.page.current, 1, {
        ease: Back.easeInOut.config(1.5),
        left: 280
      });
    } else {
      TweenMax.to(this.page.current, 1, {
        ease: Back.easeInOut.config(1.5),
        left: 0
      });
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="App-inner">
            <div className="page-wrapper" ref={this.page}>
              <NavigationBar />
              {this.props.isSignedIn ? (
                <Route exact path="/" component={WelcomePage} />
              ) : (
                <Route exact path="/" component={LandingPage} />
              )}
              <Route exact path="/recipes/new" component={CreateRecipe} />
              {this.props.isOverlayOpen ? <SiteOverlay /> : null}
            </div>
          </div>
          <SidePanel />
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isOverlayOpen: state.ui.overlay.isOverlayOpen,
    isSignedIn: state.auth.isSignedIn,
    isSidePanelOpen: state.ui.sidePanel.isOpen
  };
};
export default connect(
  mapStateToProps,
  { jwtLogin }
)(App);
