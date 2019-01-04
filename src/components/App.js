import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// Components
import MainHeader from  "./MainHeader";
import SignupForm from  "./users/SignupForm";
import NavigationBar from "./NavigationBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <NavigationBar />
            <MainHeader />
          </div>
        </BrowserRouter>
      </div>
    );
  };
};

export default App;
