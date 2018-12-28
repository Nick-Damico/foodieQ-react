import React, { Component } from 'react';
import './App.css';

import MainHeader from './components/MainHeader';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainHeader />
        <LoginForm />
      </div>
    );
  }
}

export default App;
