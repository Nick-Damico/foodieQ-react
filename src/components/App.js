import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// Components
import MainHeader from  "./MainHeader";
import SignupForm from  "./users/SignupForm";
import NavigationBar from "./NavigationBar";
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
            <MainHeader />
            <SiteOverlay />
          </div>
        </BrowserRouter>
      </div>
    );
  };
};

export default App;
