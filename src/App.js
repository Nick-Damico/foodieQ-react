import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import bgOne from './bg-one.jpg';
import bgTwo from './bg-two.jpg';
import bgThree from './bg-three.jpg';
import bgFour from './bg-four.jpg';

const pics = [
  bgOne,
  bgTwo,
  bgThree,
  bgFour
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: pics[0]
    }
  }
  componentDidMount() {
    let i = 1;
    this.interval = setInterval(() => {
      this.setState({ background: pics[i] })
      if(i < pics.length - 1) {
        i++;
      } else {
        i = 0;
      }
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const bg = this.state.background;
    return (
      <div className="App">
        <header className="App-header" style={{backgroundImage: `url(${bg})`}}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="app-title">FoodieQ</h1>
        </header>
        <LoginForm />
      </div>
    );
  }
}

export default App;
