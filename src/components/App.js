import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// Components
import SignupForm from  "./users/SignupForm";
import NavigationBar from "./NavigationBar";
import LandingPage from "./pages/LandingPage";
import SiteOverlay from './SiteOverlay';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faUserCircle } from '@fortawesome/free-solid-svg-icons'
library.add(faTimes, faUserCircle);

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <NavigationBar />
            <Route exact to="/" component={LandingPage} />
            <SiteOverlay />
          </div>
        </BrowserRouter>
      </div>
    );
  };
};

export default App;
