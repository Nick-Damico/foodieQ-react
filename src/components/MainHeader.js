import React, {Component} from 'react';
import bgOne from '../images/bg-one.jpg';
import bgTwo from '../images/bg-two.jpg';
import bgThree from '../images/bg-three.jpg';
import bgFour from '../images/bg-four.jpg';

const pics = [
  bgOne,
  bgTwo,
  bgThree,
  bgFour
];

export default class MainHeader extends Component {
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

  // Might need replaced with componentDidUnmount() later
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const bg = this.state.background;
    return(
      <header className="App-header" style={{backgroundImage: `url(${bg})`}}>
        <h1 className="app-title">FoodieQ</h1>
      </header>
    )
  }
}
