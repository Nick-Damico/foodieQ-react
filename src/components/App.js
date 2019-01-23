import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// Components
import NavigationBar from "./NavigationBar";
import LandingPage from "./pages/LandingPage";
import WelcomePage from "./pages/WelcomePage";
import SiteOverlay from "./overlay/SiteOverlay";
import CreateRecipe from "./recipes/CreateRecipe";
import { library } from "@fortawesome/fontawesome-svg-core";
import { connect } from "react-redux";
import { jwtLogin } from "../actions";
import { faTimes, faUserCircle } from "@fortawesome/free-solid-svg-icons";
library.add(faTimes, faUserCircle);

class App extends Component {
  componentDidMount() {
    // If 'foodieq' token is present in localStorage a JWTlogin request is made to Api.
    const token = localStorage.getItem("foodieq-token");
    const { isSignedIn } = this.props;
    if (token && !isSignedIn) {
      this.props.jwtLogin(token);
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <NavigationBar />
            {this.props.currentUser.id !== null ?
              <Route exact path="/" component={WelcomePage} />
              :
              <Route exact path="/" component={LandingPage} />
            }
            <Route exact path="/recipes/new" component={CreateRecipe} />
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
    isSignedIn: state.auth.isSignedIn,
    currentUser: state.currentUser
  };
};
export default connect(
  mapStateToProps,
  { jwtLogin }
)(App);
