import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// Components
import NavigationBar from "./NavigationBar";
import LandingPage from "./pages/LandingPage";
import SiteOverlay from "./SiteOverlay";
import { library } from "@fortawesome/fontawesome-svg-core";
import { connect } from "react-redux";
import { faTimes, faUserCircle } from "@fortawesome/free-solid-svg-icons";
library.add(faTimes, faUserCircle);

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <NavigationBar />
            <Route exact to="/" component={LandingPage} />
            {this.props.isOverlayOpen ? <SiteOverlay /> : null}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isOverlayOpen: state.ui.overlay.isOverlayOpen,
    isSignedIn: state.auth.isSignedIn
  };
};
export default connect(
  mapStateToProps,
  {}
)(App);
