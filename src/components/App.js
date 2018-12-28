import React, { Component } from 'react';
import './App.css';

import MainHeader from './MainHeader';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

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
