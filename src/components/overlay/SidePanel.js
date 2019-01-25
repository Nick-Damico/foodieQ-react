import "./SidePanel.css";
import React, { Component } from "react";
import Greeting from "./Greeting";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, NavItem } from "reactstrap";
import { TweenMax, Back } from "gsap/TweenMax";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    const { email } = this.props.currentUser;
    return (
      <aside ref={this.sidePanel} className="side-panel">
        <Container>
          <Row className="side-bar__user-container">
            <Col xs={{ size: 2 }} className="side-bar__user-icon-container">
              <FontAwesomeIcon icon="user-circle" className="side-bar__user-icon" />
            </Col>
            <Col xs={{ size: 10 }} className="side-bar__email">
              { email }
            </Col>
          </Row>
          <Row>
            <Nav className="side-bar__nav">
              <NavItem>
                <Link to="/recipes">Recipes</Link>
              </NavItem>
              <NavItem>
                <Link to="/recipes/new">Favorites</Link>
              </NavItem>
              <NavItem>
                <Link to="/blogs">Blogs</Link>
              </NavItem>
            </Nav>
          </Row>
        </Container>
      </aside>
    );
  }
}

const mapStateToProps = state => {
  return {
    isOpen: state.ui.sidePanel.isOpen,
    currentUser: state.currentUser
  };
};

export default connect(
  mapStateToProps,
  {}
)(SidePanel);
