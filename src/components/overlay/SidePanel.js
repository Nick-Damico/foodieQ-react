import "./SidePanel.css";
import React, { Component } from "react";
import Greeting from "./Greeting";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav } from "reactstrap";
import { TweenMax, Back } from "gsap/TweenMax";
import { connect } from "react-redux";

class SidePanel extends Component {
  constructor(props) {
    super();
    this.sidePanel = React.createRef();
  }

  componentDidUpdate() {
    if (this.props.isOpen) {
      TweenMax.to(this.sidePanel.current, 1, {
        ease: Back.easeInOut.config(1.5),
        left: 0
      });
    } else {
      TweenMax.to(this.sidePanel.current, 1, {
        ease: Back.easeInOut.config(1.5),
        left: -280
      });
    }
  }

  render() {
    return (
      <aside ref={this.sidePanel} className="side-panel">
        <Container>
          <Greeting text="Welcome back to FoodieQ" />
          <Nav vertical>
            <Link to="/recipes">Recipes</Link>
            <Link to="/recipes/new">Create Recipe</Link>
            <Link to="/blogs">View Blogs</Link>
          </Nav>
        </Container>
      </aside>
    );
  }
}

const mapStateToProps = state => {
  return {
    isOpen: state.ui.sidePanel.isOpen
  };
};

export default connect(
  mapStateToProps,
  {}
)(SidePanel);
