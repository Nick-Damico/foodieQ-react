import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// Components
import MainHeader from  "./MainHeader";
import SignupForm from  "./users/SignupForm";
import LoginForm from   "./users/LoginForm";
import GoogleAuth from  "./users/GoogleAuth";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <MainHeader />
            <LoginForm />
            <GoogleAuth />
          </div>
        </BrowserRouter>
      </div>
    );
  };
};

export default App;
